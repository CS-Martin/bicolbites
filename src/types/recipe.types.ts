export type Recipe = {
   name: string;
   description: string;
   image: string;
   ingredients: string[];
   instructions: string[];
};

export type RecipeImage = Pick<Recipe, 'image'> & {
   alt: string;
   className?: string;
};

export type RecipeCard = Pick<Recipe, 'name' | 'description' | 'image'>;
