import { RecipeImage as RecipeImageProps } from '@/types/recipe.types';

/**
 * Renders a recipe image component.
 *
 * @param {string} image - The image source.
 * @param {string} alt - The alternate text for the image.
 * @param {number} width - The width of the image.
 * @param {number} height - The height of the image.
 * @param {string} className - The CSS class name for styling.
 * @return {JSX.Element} The rendered image component.
 */
const RecipeImage: React.FC<RecipeImageProps> = ({
   image,
   alt,
   className
}): JSX.Element => {
   return (
      <>
         <img src={image} alt={alt} className={className} />
      </>
   );
};

export default RecipeImage;
