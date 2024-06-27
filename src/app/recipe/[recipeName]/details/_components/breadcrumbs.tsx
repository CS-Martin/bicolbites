import { Recipe } from '../../../../../types/recipe.types';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

type RecipePageBreadcrumbsProps = {
    pageName: string;
};
const RecipePageBreadcrumbs: React.FC<RecipePageBreadcrumbsProps> = ({
    pageName
}): JSX.Element => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink
                        href={`recipe/${pageName?.toLowerCase()}/details`}>
                        {pageName}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default RecipePageBreadcrumbs;
