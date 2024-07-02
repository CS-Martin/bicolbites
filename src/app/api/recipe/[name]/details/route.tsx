import { RECIPE_JSON_FILE_PATH } from '@/lib/constants';
import { Recipe } from '@/types/recipe.types';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

/**
 * Retrieves a recipe by name from the recipe JSON file.
 *
 * @param {Request} request - The HTTP request object.
 * @param {any} context - The Next.js context object.
 * @return {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the recipe data or an error message.
 */
export async function GET(request: Request, context: any) {
    try {
        const { params } = context;
        const response = await fs.readFile(RECIPE_JSON_FILE_PATH, 'utf8');
        const recipes = JSON.parse(response);

        const recipe = recipes.filter(
            (recipe: Recipe) =>
                recipe.name.toLowerCase() === params.name.toLowerCase()
        );

        // If no recipe is found with the given name, return an error response.
        if (recipe.length === 0) {
            return NextResponse.json(
                { error: 'Recipe not found.' },
                { status: 404 }
            );
        }

        return NextResponse.json(recipe[0]);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json(
            { error: 'An error occurred while fetching recipes.' },
            { status: 500 }
        );
    }
}
