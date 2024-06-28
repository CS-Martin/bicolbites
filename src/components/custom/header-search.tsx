import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Search } from 'lucide-react';
import { DropdownMenuShortcut } from '../ui/dropdown-menu';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { RecipeCard } from '@/types/recipe.types';
import { Recipe } from '../../types/recipe.types';
import { fetchAllRecipes } from '@/services/recipes-api';
import { useDisplayRecipes } from '@/hooks/useRecipes';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const HeaderSearch: React.FC = (): JSX.Element => {
    const [searchInput, setSearchInput] = useState('');
    const [open, setOpen] = useState(false);
    const { recipes, loading } = useDisplayRecipes(searchInput);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="flex items-center text-white">
                <Search size={18} className="mr-2" />
                <DropdownMenuShortcut className="font-bold">
                    ⌘S
                </DropdownMenuShortcut>
            </DialogTrigger>
            <DialogContent className="h-[500px] max-w-xl overflow-y-auto border px-3 py-0">
                <DialogHeader className="sticky top-0 z-10 border-b">
                    <DialogTitle className="flex items-center">
                        <Search size={24} className="absolute text-label" />
                        <Input
                            type="text"
                            placeholder="Search for recipes"
                            className="border-none py-9 ps-9 focus-visible:ring-transparent"
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className="pb-5">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        recipes.map((recipe, i) => (
                            <Link
                                href={`/recipe/${recipe.name}/details`}
                                onClick={() => setOpen(false)}
                                key={i}
                            >
                                <SearchRecipeCard
                                    name={recipe.name}
                                    image={recipe.image}
                                    instructionsLength={
                                        recipe.instructions.length
                                    }
                                    ingredientsLength={
                                        recipe.ingredients.length
                                    }
                                />
                            </Link>
                        ))
                    )}
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
};

const SearchRecipeCard = ({
    name,
    image,
    instructionsLength,
    ingredientsLength
}: {
    name: string;
    image: string;
    instructionsLength: number;
    ingredientsLength: number;
}) => {
    return (
        <div className="w-full cursor-pointer rounded-lg px-4 py-2 hover:bg-hover">
            <Link href={`/recipe/${name}/details`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src={image}
                            alt={name}
                            className="h-12 w-12 rounded"
                        />
                        <p className="font-semibold text-primary">{name}</p>
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="text-label">
                            {instructionsLength} Instructions
                        </Badge>
                        <Badge variant="outline" className="text-label">
                            {ingredientsLength} Ingredients
                        </Badge>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HeaderSearch;
