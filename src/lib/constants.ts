import path from 'path';

export const RECIPE_JSON_FILE_PATH = path.join(
    process.cwd(),
    'src',
    'data',
    'recipes.json'
);

export const PRODUCTION_API_URL = 'https://bicolbites.vercel.app/api/recipe';
export const DEVELOPMENT_API_URL = 'http://localhost:3000/api/recipe';
