'use client'

import { ModeToggle } from '@/components/custom/theme-toggler'
import { useDisplayRecipes } from '@/hooks/useRecipes'
import RecipeCard from './_components/recipe-card'

export default function Home() {
  const recipes = useDisplayRecipes()
  return (
    <main className="container">
      <ModeToggle />
      {recipes.map((recipe) => (
        <RecipeCard
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      ))}
    </main>
  )
}
