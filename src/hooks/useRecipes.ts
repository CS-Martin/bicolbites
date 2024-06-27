import { useState, useEffect } from 'react';
import { Recipe } from '@/types/recipe.types';
import { fetchAllRecipes } from '@/services/recipes-api';
import { filterSearchedRecipes } from '@/lib/utils';

export const useDisplayRecipes = (
   searchParams: string
): { recipes: Recipe[]; loading: boolean } => {
   const [recipes, setRecipes] = useState<Recipe[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchRecipes = async () => {
         const recipes = await fetchAllRecipes();

         if (searchParams) {
            const filteredRecipes = filterSearchedRecipes(
               searchParams,
               recipes
            );
            return setRecipes(filteredRecipes);
         }

         setRecipes(recipes);
      };

      fetchRecipes();
      setLoading(false);
   }, [searchParams]);

   return { recipes, loading };
};
