import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { RECIPE_JSON_FILE_PATH } from '@/lib/constants';
import { Recipe } from '@/types/recipe.types';

/**
 * Fetches a specific recipe from the RECIPE_JSON_FILE_PATH based on the provided name.
 *
 * @param {Request} request - The incoming request object.
 * @param {any} context - The context object containing the request parameters (Ex. /api/recipe/[name]) <- name is context.
 * @return {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the recipe data or an error message.
 */
export async function GET(request: Request, context: any) {
  try {
    const { params } = context;
    const response = await fs.readFile(RECIPE_JSON_FILE_PATH, 'utf8');
    const recipe = JSON.parse(response).find(
      (recipe: Recipe) =>
        recipe.name.toLowerCase() === params.name.toLowerCase()
    );
    return NextResponse.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching recipe.' },
      { status: 500 }
    );
  }
}
