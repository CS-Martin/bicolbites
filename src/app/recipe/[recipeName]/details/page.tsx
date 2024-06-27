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
        <main className="container mt-[100px] md:px-28">
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
                                className={`mt-5 w-full rounded-md object-cover shadow-md contrast-[1.15] transition-transform duration-300 ease-in-out lg:h-[530px] lg:w-[350px]`}
                            />
                        </Tilt>
                    </div>
                </section>

                <section className="mt-10">
                    <h1 className="text-4xl font-bold">{recipes[0]?.name}</h1>
                    <Separator className="my-5" />
                    <div>
                        <label className="text-[14px] text-slate-600">
                            Description:
                        </label>
                        <p className="mt-1">{recipes[0]?.description}</p>
                    </div>

                    <div className="mt-7 rounded-lg border px-3">
                        <Accordion type="single" collapsible>
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
                                                ingredients={ingredient}
                                            />
                                        )
                                    )}
                                </AccordionContent>
                            </AccordionItem>
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
                                                ingredients={ingredient}
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
