import { Skeleton } from '../ui/skeleton';

export const RecipeCardSkeleton: React.FC = (): JSX.Element => {
  return (
    <>
      {[...Array(5).keys()].map((_, index) => (
        <Skeleton
          className="relative h-[350px] max-w-full overflow-hidden rounded-sm"
          key={index}
        />
      ))}
    </>
  );
};
