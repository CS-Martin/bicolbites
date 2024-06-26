import { useState, useEffect } from 'react';
import { Recipe } from '@/types/recipe.types';
import { fetchAllRecipes } from '@/services/recipes-api';

export const useDisplayRecipes = (searchParams: string): Recipe[] => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await fetchAllRecipes();

      if (searchParams) {
        console.log('Search', searchParams);
        const filteredRecipes = useFilterSearchedRecipes(searchParams, recipes);
        return setRecipes(filteredRecipes);
      }

      setRecipes(recipes);
    };

    fetchRecipes();
  }, [searchParams]);

  return recipes;
};

export const useFilterSearchedRecipes = (
  searchParams: string,
  recipes: Recipe[]
): Recipe[] => {
  const searchedRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchParams.toLowerCase())
  );

  return searchedRecipes as Recipe[];
};
