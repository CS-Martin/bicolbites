'use client';

import RecipeImage from '@/components/custom/recipe-image';
import { useDisplayRecipes } from '@/hooks/useRecipes';
import { usePathname } from 'next/navigation';

export default function RecipeDetailsPage() {
  // Get http://localhost:3000/recipe/kinalas/details
  const pathname = usePathname();
  const recipeName = pathname.split('/')[2];
  const decodedRecipeName = decodeURIComponent(recipeName);

  const { recipes, loading } = useDisplayRecipes(decodedRecipeName);
  console.log(recipes);

  return (
    <main className="container px-36">
      <div>
        <RecipeImage
          image={recipes[0]?.image}
          alt={recipes[0]?.name}
          className={`h-[350px] w-full object-cover contrast-[1.15] transition-transform duration-300 ease-in-out`}
        />
        {recipes.map((recipe) => (
          <div key={recipe.name}>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
