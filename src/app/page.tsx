'use client';

import { useDisplayRecipes } from '@/hooks/useRecipes';
import RecipeCard from './_components/recipe-card';
import HomeSearch from './_components/search';
import { useSearchParams } from 'next/navigation';
import { ModeToggle } from '@/components/custom/theme-toggler';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toString() ?? '';

  const recipes = useDisplayRecipes(search);

  return (
    <main>
      <ModeToggle />
      <div className="h-[450px]">
        <img
          src="/images/people-enjoying-mexican-barbecue.jpg"
          alt="test"
          className="h-full w-full object-cover contrast-[1.05]"
        />
      </div>
      <div className="border-b border-t shadow-xl">
        <HomeSearch />
      </div>
      <div className="container mt-10 pb-20">
        <div>
          <Label className="flex gap-x-1 font-normal text-gray-400">
            Results:
            {search ? <Label>{search}</Label> : <Label>All</Label>}
          </Label>
        </div>
        <Separator className="my-3" />
        <div className="grid grid-cols-5 gap-3">
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
