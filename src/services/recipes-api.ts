import { Recipe } from "@/types/recipe.types";

export const fetchAllRecipes = async (): Promise<Recipe[]> => {
  console.log("ENTERED RECIPE API");
  try {
    const storedRecipes: string | null = localStorage.getItem("recipes");

    if (storedRecipes) {
      return JSON.parse(storedRecipes as string);
    }

    const response: Response = await fetch("http://localhost:3000/api/recipe");
    const recipes: Recipe[] = await response.json();

    console.log("DEPOTA", recipes);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
