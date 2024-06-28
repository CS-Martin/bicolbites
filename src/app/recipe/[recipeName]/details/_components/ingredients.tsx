import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Playfair_Display } from 'next/font/google';

const PlayfairDisplay = Playfair_Display({ subsets: ['latin'] });

type IngredientsComponentProps = {
    index: number;
    recipeName: string;
    ingredients: string;
};

/**
 * A function that renders ingredients inside the accordion
 *
 * @param {number} index - The index of the ingredient.
 * @param {string} recipeName - The name of the recipe.
 * @param {string} ingredients - The ingredients for the recipe.
 * @return {JSX.Element} The rendered ingredient component.
 */
const IngredientsComponent: React.FC<IngredientsComponentProps> = ({
    index,
    recipeName,
    ingredients
}): JSX.Element => {
    /**
     * TODO:
     * I want to store the checkboxes states to localstorage
     * So that, when user refreshes; the checkboxes states remain
     */
    const [isChecked, setIsChecked] = useState(() => {
        // Load the initial state from localStorage if available
        const savedState = localStorage.getItem(
            `${'[ingredient]' + recipeName}-${index}`
        );
        return savedState ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
        // Only save in the localstorage if checked
        // Otherwise, remove from the localstorage
        if (isChecked) {
            localStorage.setItem(
                `${'[ingredient]' + recipeName}-${index}`,
                JSON.stringify(isChecked)
            );
        } else {
            localStorage.removeItem(`[ingredient]${recipeName}-${index}`);
        }
    }, [isChecked, index]);

    const handleCheckboxChange = () => {
        setIsChecked((prevState: Boolean) => !prevState);
    };

    // Regular expression to capture quantity and ingredient
    const ingredientRegex =
        /^([\d/.\s-]+(?:cups|kg|pieces|tablespoons|head|thumb-sized|to taste)?\s*)?(.*)$/i;
    const matches = ingredients.match(ingredientRegex);

    const quantity: string = matches?.[1]?.trim() || '';
    const ingredientName: string = matches?.[2]?.trim() || ingredients;
    const ingredientsLength: number = ingredients.length;

    return (
        <div className="flex justify-between border-b px-3 py-4">
            <div className="flex gap-x-2">
                <p
                    className={`${PlayfairDisplay.className} w-[60px] text-4xl font-bold`}
                >
                    {ingredientsLength >= 10
                        ? `${String(index + 1).padStart(2, '0')}`
                        : 'Ingredient'}
                </p>
                <div className="w-[60px">
                    <input
                        type="checkbox"
                        className="h-5 w-5"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <p
                    className={`relative ${isChecked ? 'text-gray-400' : ''} transition-all duration-500 ease-in-out`}
                >
                    {ingredientName.charAt(0).toUpperCase() +
                        ingredientName.slice(1)}
                    <span
                        className={`absolute left-0 top-1/4 h-[1px] w-full transform bg-current transition-transform duration-500 ease-in-out ${
                            isChecked ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        style={{ transformOrigin: 'left' }}
                    ></span>
                </p>
            </div>
            <div>
                <Label className="text-label">{quantity}</Label>
            </div>
        </div>
    );
};

export default IngredientsComponent;
