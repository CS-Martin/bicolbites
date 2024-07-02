import { RECIPE_JSON_FILE_PATH } from '@/lib/constants';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

/**
 * Retrieves the recipes from the recipe JSON file and returns them as a JSON response.
 *
 * @return {Promise<NextResponse>} A Promise that resolves to a NextResponse object containing the recipes data or an error message.
 */
export async function GET() {
    try {
        const response = await fs.readFile(RECIPE_JSON_FILE_PATH, 'utf8');
        const recipes = JSON.parse(response);

        return NextResponse.json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return NextResponse.json(
            { error: 'An error occurred while fetching recipes.' },
            { status: 500 }
        );
    }
}
