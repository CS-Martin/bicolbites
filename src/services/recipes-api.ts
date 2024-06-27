import { Recipe } from '@/types/recipe.types';

let environment = process.env.NODE_ENV;
export const fetchAllRecipes = async (): Promise<Recipe[]> => {
    /**
     * TODO: Stop fetching recipes from local storage.
     * Because Nextjs automatically caches the data.
     */

    console.log('Environment:', environment);
    try {
        const response: Response = await fetch(
            environment === 'production'
                ? 'https://nagabites.vercel.app/api/recipe'
                : 'http://localhost:3000/api/recipe'
        );
        const recipes: Recipe[] = await response.json();

        return recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};
