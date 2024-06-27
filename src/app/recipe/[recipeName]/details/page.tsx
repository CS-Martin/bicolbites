'use client';

import RecipeImage from '@/components/custom/recipe-image';
import { useDisplayRecipes } from '@/hooks/useRecipes';
import { Recipe } from '@/types/recipe.types';
import { usePathname } from 'next/navigation';
import React from 'react';
import RecipePageBreadcrumbs from './_components/breadcrumbs';

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
            <div className="relative grid h-[100vh] gap-10 lg:grid-cols-[1fr_2fr]">
                <section className="">
                    <div className="lg:fixed">
                        <RecipePageBreadcrumbs pageName={recipes[0]?.name} />
                        <RecipeImage
                            image={recipes[0]?.image}
                            alt={recipes[0]?.name}
                            className={`mt-5 w-full rounded-md object-cover shadow-md contrast-[1.15] transition-transform duration-300 ease-in-out lg:h-[530px] lg:w-[350px]`}
                        />
                    </div>
                </section>
                {recipes.map((recipe) => (
                    <div className="mt-9" key={recipe.name}>
                        <h1>{recipe.name}</h1>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default RecipeDetailsPage;
