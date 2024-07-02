import { DEVELOPMENT_API_URL, PRODUCTION_API_URL } from '@/lib/constants';
import { Recipe } from '@/types/recipe.types';
import { notFound } from 'next/navigation';

let environment = process.env.NODE_ENV;

/**
 * Fetches all recipes from the API.
 *
 * @return {Promise<Recipe[]>} A promise that resolves to an array of Recipe objects.
 */
export const fetchAllRecipes = async (): Promise<Recipe[] | null> => {
    /**
     * TODO: Stop fetching recipes from local storage.
     * Because Nextjs automatically caches the data.
     */

    console.log('Environment:', environment);
    try {
        const response: Response = await fetch(
            environment === 'production'
                ? PRODUCTION_API_URL
                : DEVELOPMENT_API_URL
        );

        if (response.status !== 200) {
            console.log(':return');
            return null;
        }

        const recipes: Recipe[] = await response.json();

        return recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return null;
    }
};

/**
 * Fetches a specific recipe from the API.
 *
 * @param {string} recipeName - The name of the recipe to fetch.
 * @return {Promise<Recipe | null>} A promise that resolves to the fetched recipe or null if not found.
 */
export const fetchSpecificRecipe = async (
    recipeName: string
): Promise<Recipe | null> => {
    try {
        const response: Response = await fetch(
            environment === 'production'
                ? `${PRODUCTION_API_URL}/${recipeName}/details`
                : `${DEVELOPMENT_API_URL}/${recipeName}/details`
        );

        /**
         * TODO: Return a 404 if the recipe is not found.
         */
        if (!response.ok) {
            return null;
        }

        const recipe = await response.json();
        return recipe;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return null;
    }
};
