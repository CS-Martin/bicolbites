/**
 * I have encountered a very weird bug .-.
 * Note: turns out the you can pass 'use client' to children
 */

import React, { Suspense } from 'react';
import { RecipeCard as RecipeCardProps } from '@/types/recipe.types';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const PlayfairDisplay = Playfair_Display({ subsets: ['latin'] });

const RecipeCard: React.FC<RecipeCardProps> = ({
    name,
    image,
    description
}): JSX.Element => {
    return (
        <div className="relative overflow-hidden rounded-lg bg-white shadow">
            <Link href={`/recipe/${name.toLowerCase()}/details`} scroll={true}>
                <div className="group relative overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-auto w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end rounded-sm bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform group-hover:from-black/100">
                        <div className="absolute top-[100%] transition-all duration-500 group-hover:-translate-y-[115%]">
                            <h2
                                className={`${PlayfairDisplay.className} absolute bottom-[110%] text-xl font-bold tracking-wider text-white duration-300 ease-in-out group-hover:underline`}
                            >
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
