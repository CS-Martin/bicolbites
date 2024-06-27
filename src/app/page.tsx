'use client';

import { useDisplayRecipes } from '@/hooks/useRecipes';
import RecipeCard from './_components/recipe-card';
import HomeSearch from './_components/search';
import { useSearchParams } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import SortRecipesButton from './_components/sort';
import { Recipe } from '@/types/recipe.types';
import { RecipeCardSkeleton } from './_components/skeletons';
import { Suspense } from 'react';

export default function Home() {
    return (
        <main>
            <section className="relative flex h-[450px] animate-fade items-center justify-center">
                <h1 className="playfair-display-font absolute z-10 animate-fade text-8xl font-bold text-white">
                    Bicol <span className="sacramento-regular">Bites</span>{' '}
                    Recipes
                </h1>
                <img
                    src="/images/people-enjoying-mexican-barbecue.jpg"
                    alt="test"
                    className="h-full w-full animate-fade object-cover contrast-[0.8] backdrop-brightness-75 transition-transform duration-300 ease-in-out"
                />
            </section>

            <section className="animate-fade border-b border-t shadow-xl">
                <Suspense fallback={<div>Loading search...</div>}>
                    <HomeSearch />
                </Suspense>
            </section>

            <section className="container mt-10 pb-20">
                <div
                    id="recipes-anchor"
                    className="mb-3 flex items-center justify-between">
                    <Label className="flex gap-x-1 font-normal text-label">
                        Results:
                        <Suspense fallback={<Label>Loading...</Label>}>
                            <ResultsLabel />
                        </Suspense>
                    </Label>
                    <SortRecipesButton />
                </div>
                <Separator className="my-3" />
                <Suspense fallback={<RecipeCardSkeletonGrid />}>
                    <RecipeGrid />
                </Suspense>
            </section>
        </main>
    );
}

function ResultsLabel() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search')?.toString() ?? '';
    return search ? <Label>{search}</Label> : <Label>All</Label>;
}

function RecipeGrid() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search')?.toString() ?? '';

    const { recipes, loading } = useDisplayRecipes(search);

    if (loading) {
        return <RecipeCardSkeletonGrid />;
    }

    return (
        <div className="masonry-grid">
            {recipes.map((recipe: Recipe) => (
                <div className="masonry-item" key={recipe.name}>
                    <RecipeCard
                        name={recipe.name}
                        description={recipe.description}
                        image={recipe.image}
                    />
                </div>
            ))}
        </div>
    );
}

function RecipeCardSkeletonGrid() {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
                <RecipeCardSkeleton key={index} />
            ))}
        </div>
    );
}
