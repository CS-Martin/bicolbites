'use client';

import { ModeToggle } from '@/components/custom/theme-toggler';
import { useDisplayRecipes } from '@/hooks/useRecipes';
import RecipeCard from './_components/recipe-card';
import Image from 'next/image';
import HomeSearch from './_components/search';

export default function Home() {
  const recipes = useDisplayRecipes();
  return (
    <main>
      {/* <ModeToggle /> */}
      <div className="h-[600px]">
        <img
          src="/images/people-enjoying-mexican-barbecue.jpg"
          alt="test"
          className="h-full w-full object-cover contrast-[1.05]"
        />
      </div>
      <div className="border-b shadow-xl">
        <HomeSearch />
      </div>
      <div className="container mt-10">
        <div className="grid grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard
              name={recipe.name}
              description={recipe.description}
              image={recipe.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
