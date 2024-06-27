import { Recipe } from '@/types/recipe.types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const filterSearchedRecipes = (
   searchParams: string,
   recipes: Recipe[]
): Recipe[] => {
   const searchedRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchParams.toLowerCase())
   );

   return searchedRecipes as Recipe[];
};
