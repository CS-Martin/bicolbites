import { Recipe } from '@/types/recipe.types';

export const fetchAllRecipes = async (): Promise<Recipe[]> => {
    /**
     * TODO: Stop fetching recipes from local storage.
     * Because Nextjs automatically caches the data.
     */

    try {
        const response: Response = await fetch(
            'http://localhost:3000/api/recipe'
        );
        const recipes: Recipe[] = await response.json();

        return recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
};
