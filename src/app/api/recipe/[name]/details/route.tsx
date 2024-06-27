import { RECIPE_JSON_FILE_PATH } from '@/lib/constants';
import { Recipe } from '@/types/recipe.types';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request: Request, context: any) {
    try {
        const { params } = context;
        const response = await fs.readFile(RECIPE_JSON_FILE_PATH, 'utf8');
        const recipes = JSON.parse(response);

        const recipe = recipes.filter(
            (recipe: Recipe) =>
                recipe.name.toLowerCase() === params.name.toLowerCase()
        );

        return NextResponse.json(recipe);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json(
            { error: 'An error occurred while fetching recipes.' },
            { status: 500 }
        );
    }
}
