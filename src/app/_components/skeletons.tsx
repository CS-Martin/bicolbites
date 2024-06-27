import { Skeleton } from '@/components/ui/skeleton';

export const RecipeCardSkeleton = () => {
  return [...Array(5)].map((_, i) => (
    <Skeleton key={i} className="h-[350px] w-full" />
  ));
};
