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
import Tilt from 'react-parallax-tilt';
import { Playfair_Display, Sacramento } from 'next/font/google';
import Loader from './loading';

const PlayfairDisplay = Playfair_Display({ subsets: ['latin'] });
const SacramentoRegular = Sacramento({ weight: '400', subsets: ['latin'] });

export default function Home() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search')?.toString() ?? '';

    const { recipes, loading } = useDisplayRecipes(search);

    if (loading) {
        return <Loader />;
    }
    return (
        <main>
            <section className="relative flex h-[450px] animate-fade items-center justify-center">
                <h1
                    className={`${PlayfairDisplay.className} absolute z-10 animate-fade text-8xl font-bold text-white`}
                >
                    Bicol{' '}
                    <span className={`${SacramentoRegular.className}`}>
                        Bites
                    </span>{' '}
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
                    className="mb-3 flex items-center justify-between"
                >
                    <Label className="flex gap-x-1 font-normal text-label">
                        Results:
                        <Suspense fallback={<Label>Loading...</Label>}>
                            <ResultsLabel />
                        </Suspense>
                    </Label>
                    <SortRecipesButton />
                </div>
                <Separator className="my-3" />
                <Suspense fallback={<RecipeCardSkeleton />}>
                    <RecipeGrid recipes={recipes} />
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

function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
    return (
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
            {recipes.map((recipe: Recipe, index: number) => (
                <div className="mb-5 inline-block w-full" key={index}>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.1}
                        glareColor="lightblue"
                        glarePosition="all"
                        glareBorderRadius="10px"
                        transitionSpeed={10000}
                        scale={1.01}
                    >
                        <RecipeCard
                            name={recipe.name}
                            description={recipe.description}
                            image={recipe.image}
                        />
                    </Tilt>
                </div>
            ))}
        </div>
    );
}
