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

/**
 * Renders the breadcrumb component for the recipe page.
 *
 * @param {RecipePageBreadcrumbsProps} props - The component props.
 * @param {string} props.pageName - The name of the recipe page.
 * @return {JSX.Element} The breadcrumb component.
 */
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
                        href={`recipe/${pageName?.toLowerCase()}/details`}
                    >
                        {pageName}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default RecipePageBreadcrumbs;
