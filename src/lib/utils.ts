import { Recipe } from '@/types/recipe.types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Filters an array of recipes based on the search parameters.
 *
 * @param {string} searchParams - The search parameters to filter the recipes.
 * @param {Recipe[]} recipes - The array of recipes to filter.
 * @return {Recipe[]} The filtered array of recipes.
 */
export const filterSearchedRecipes = (
    searchParams: string,
    recipes: Recipe[]
): Recipe[] => {
    const searchedRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchParams.toLowerCase())
    );

    return searchedRecipes as Recipe[];
};
