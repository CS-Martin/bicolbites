import { DEVELOPMENT_API_URL, PRODUCTION_API_URL } from '@/lib/constants';
import { Recipe } from '@/types/recipe.types';

let environment = process.env.NODE_ENV;

/**
 * Fetches all recipes from the API.
 *
 * @return {Promise<Recipe[]>} A promise that resolves to an array of Recipe objects.
 */
export const fetchAllRecipes = async (): Promise<Recipe[]> => {
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
        const recipes: Recipe[] = await response.json();

        return recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};
