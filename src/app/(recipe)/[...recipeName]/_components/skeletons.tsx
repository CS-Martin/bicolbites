import { Skeleton } from '@/components/ui/skeleton';

export const RecipeImageSkeleton = () => {
    return (
        <Skeleton className="sm:h-[500px] md:h-[400px] lg:h-[530px] lg:w-[350px]" />
    );
};

export const RecipeBreadCrumbSkeleton = () => {
    return <Skeleton className="mb-3 h-[20px] w-[200px]" />;
};

export const RecipeDetailsSkeleton = () => {
    return <Skeleton className="mt-8 h-[800px] w-auto" />;
};
