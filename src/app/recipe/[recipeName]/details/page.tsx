'use client';

import RecipeImage from '@/components/custom/recipe-image';
import { useDisplayRecipes } from '@/hooks/useRecipes';
import { usePathname } from 'next/navigation';
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

const RecipeDetailsPage: React.FC = (): JSX.Element => {
    // Get http://localhost:3000/recipe/kinalas/details
    const pathname = usePathname();
    const recipeName = pathname.split('/')[2];
    const decodedRecipeName = decodeURIComponent(recipeName);

    /**
     * Encountered a nextjs bug that scrolls to the top
     * on event change. This is a workaround
     * to avoid that bug.
     */
    scrollTo(0, 0);
    const { recipes, loading } = useDisplayRecipes(decodedRecipeName);

    return (
        <main className="container mt-[100px] h-[100%] animate-fade md:px-10 lg:px-14 xl:px-28">
            <div className="relative grid h-[100vh] lg:grid-cols-[1fr_2fr]">
                <section className="">
                    <div className="lg:fixed">
                        <RecipePageBreadcrumbs pageName={recipes[0]?.name} />
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.1}
                            glareColor="lightblue"
                            glarePosition="all"
                            glareBorderRadius="10px"
                            transitionSpeed={7000}
                            scale={1.02}>
                            <RecipeImage
                                image={recipes[0]?.image}
                                alt={recipes[0]?.name}
                                className={`mt-5 w-full rounded-md object-cover shadow-md contrast-[1.15] transition-transform duration-300 ease-in-out sm:h-[500px] md:h-[400px] lg:h-[530px] lg:w-[350px]`}
                            />
                        </Tilt>
                    </div>
                </section>

                <section className="mt-10">
                    <h1
                        className={`${PlayfairDisplay.className} text-4xl font-bold`}>
                        {recipes[0]?.name}
                    </h1>
                    <Separator className="my-5" />
                    <div>
                        <Label className="text-[14px] text-label">
                            Description:
                        </Label>
                        <p className="mt-1">{recipes[0]?.description}</p>
                    </div>

                    {/* Accordion */}
                    <div className="my-7 rounded-lg border bg-card px-3">
                        <Accordion
                            type="single"
                            defaultValue="ingredients"
                            collapsible>
                            <AccordionItem
                                className="border-none"
                                value="ingredients">
                                <AccordionTrigger>Ingredients</AccordionTrigger>
                                <AccordionContent>
                                    {recipes[0]?.ingredients.map(
                                        (ingredient, index) => (
                                            <IngredientsComponent
                                                key={index}
                                                index={index}
                                                recipeName={recipes[0]?.name}
                                                ingredients={ingredient}
                                            />
                                        )
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                className="border-none"
                                value="instructions">
                                <AccordionTrigger>
                                    Instructions
                                </AccordionTrigger>
                                <AccordionContent>
                                    {recipes[0]?.instructions.map(
                                        (instruction, index) => (
                                            <InstructionsComponent
                                                key={index}
                                                index={index}
                                                recipeName={recipes[0]?.name}
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
