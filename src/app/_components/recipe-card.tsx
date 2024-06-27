/**
 * I have encountered a very weird bug .-.
 * Note: turns out the you can pass 'use client' to children
 */

import React, { Suspense } from 'react';
import { RecipeCard as RecipeCardProps } from '@/types/recipe.types';
import Link from 'next/link';
import RecipeImage from '@/components/custom/recipe-image';

const RecipeCard: React.FC<RecipeCardProps> = ({
    name,
    image,
    description
}): JSX.Element => {
    return (
        <div className="relative h-[350px] max-w-full overflow-hidden rounded-sm">
            <Link href={`/recipe/${name.toLowerCase()}/details`} scroll={true}>
                <div className="group relative overflow-hidden">
                    <RecipeImage
                        image={image}
                        alt={name}
                        className={`h-[350px] w-full object-cover contrast-[1.15] transition-transform duration-300 ease-in-out`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end rounded-sm bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform group-hover:from-black/100">
                        <div className="absolute top-[100%] transition-all duration-500 group-hover:-translate-y-[115%]">
                            <h2 className="playfair-display-font absolute bottom-[105%] text-xl font-bold tracking-wider text-white duration-300 ease-in-out group-hover:underline">
                                {name}
                            </h2>
                            <p className="text-white">{description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RecipeCard;
