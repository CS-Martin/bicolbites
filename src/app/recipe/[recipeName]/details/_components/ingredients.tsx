import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Playfair_Display } from 'next/font/google';

const PlayfairDisplay = Playfair_Display({ subsets: ['latin'] });

type IngredientsComponentProps = {
    index: number;
    recipeName: string;
    ingredients: string;
};

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
            `${'ig-' + recipeName}-${index}`
        );
        return savedState ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
        // Save the state to localStorage whenever it changes
        localStorage.setItem(
            `${'ig-' + recipeName}-${index}`,
            JSON.stringify(isChecked)
        );
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
                    className={`${PlayfairDisplay.className} w-[60px] text-4xl font-bold`}>
                    {ingredientsLength >= 10
                        ? `${String(index + 1).padStart(2, '0')}`
                        : 'Ingredient'}
                </p>
                <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <p
                    className={`relative ${isChecked ? 'text-gray-400' : ''} transition-all duration-500 ease-in-out`}>
                    {ingredientName.charAt(0).toUpperCase() +
                        ingredientName.slice(1)}
                    <span
                        className={`absolute left-0 top-1/4 h-[1px] w-full transform bg-current transition-transform duration-500 ease-in-out ${
                            isChecked ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        style={{ transformOrigin: 'left' }}></span>
                </p>
            </div>
            <div>
                <Label className="text-label">{quantity}</Label>
            </div>
        </div>
    );
};

export default IngredientsComponent;
