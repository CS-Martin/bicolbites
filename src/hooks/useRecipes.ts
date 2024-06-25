

import { useState, useEffect } from "react";
import { fetchAllRecipes } from "@/services/recipes-api";
import { Recipe } from "@/types/recipe.types";

export const useDisplayRecipes = (): Recipe[] => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesFromLocalStorage = await useGetRecipesFromLocalStorage();
      setRecipes(recipesFromLocalStorage);
    };

    fetchRecipes();
  }, []);

  return recipes;
};

export const useGetRecipesFromLocalStorage = async (): Promise<Recipe[]> => {
  const storedRecipes: string | null = localStorage.getItem("recipes");

  if (!storedRecipes) {
    const recipes: Recipe[] = await fetchAllRecipes();
    return recipes;
  }

  return JSON.parse(storedRecipes) as Recipe[];
};