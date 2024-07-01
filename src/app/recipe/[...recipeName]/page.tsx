'use client';

import RecipeImage from '@/components/custom/recipe-image';
import { useDisplayRecipeDetails } from '@/hooks/useRecipes';
import { notFound, useParams, usePathname } from 'next/navigation';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import RecipePageBreadcrumbs from './_components/breadcrumbs';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import IngredientsComponent from './_components/ingredients';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import InstructionsComponent from './_components/instructions';
import { Playfair_Display } from 'next/font/google';

const PlayfairDisplay = Playfair_Display({ subsets: ['latin'] });

interface RecipeDetailsPageProps {
    params: {
        recipeName: string;
    };
}

const RecipeDetailsPage: React.FC<RecipeDetailsPageProps> = ({
    params
}): JSX.Element => {
    const recipeName = decodeURIComponent(params.recipeName[0]) as string;
    /**
     * Encountered a nextjs bug that scrolls to the top
     * on event change. This is a workaround
     * to avoid that bug.
     */
    // setTimeout(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // }, 800);

    const { recipe, loading } = useDisplayRecipeDetails(recipeName);
    console.log(recipe?.name);

    if (recipe === null) {
        return notFound();
    }

    return (
        <main className="container mt-[100px] h-[100%] animate-fade md:px-10 lg:px-14 xl:px-28">
            <div className="relative grid h-[100vh] lg:grid-cols-[1fr_2fr]">
                <section className="">
                    <div className="lg:fixed">
                        <RecipePageBreadcrumbs pageName={recipe?.name} />
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            glareColor="lightblue"
                            glarePosition="all"
                            glareBorderRadius="10px"
                            transitionSpeed={7000}
                            scale={1.02}
                        >
                            <RecipeImage
                                image={recipe?.image}
                                alt={recipe?.name}
                                className={`mt-5 w-full rounded-md object-cover shadow-md contrast-[1.15] transition-transform duration-300 ease-in-out sm:h-[500px] md:h-[400px] lg:h-[530px] lg:w-[350px]`}
                            />
                        </Tilt>
                    </div>
                </section>

                <section className="mt-10">
                    <h1
                        className={`${PlayfairDisplay.className} text-4xl font-bold`}
                    >
                        {recipe?.name}
                    </h1>
                    <Separator className="my-5" />
                    <div>
                        <Label className="text-[14px] text-label">
                            Description:
                        </Label>
                        <p className="mt-1">{recipe?.description}</p>
                    </div>

                    <div className="my-7 rounded-lg border bg-card px-3">
                        <Accordion
                            type="single"
                            defaultValue="ingredients"
                            collapsible
                        >
                            <AccordionItem
                                className="border-none"
                                value="ingredients"
                            >
                                <AccordionTrigger>Ingredients</AccordionTrigger>
                                <AccordionContent>
                                    {recipe?.ingredients.map(
                                        (ingredient, index) => (
                                            <IngredientsComponent
                                                key={index}
                                                index={index}
                                                recipeName={recipe?.name}
                                                ingredients={ingredient}
                                            />
                                        )
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                className="border-none"
                                value="instructions"
                            >
                                <AccordionTrigger>
                                    Instructions
                                </AccordionTrigger>
                                <AccordionContent>
                                    {recipe?.instructions.map(
                                        (instruction, index) => (
                                            <InstructionsComponent
                                                key={index}
                                                index={index}
                                                recipeName={recipe?.name}
                                                instructions={instruction}
                                            />
                                        )
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default RecipeDetailsPage;
