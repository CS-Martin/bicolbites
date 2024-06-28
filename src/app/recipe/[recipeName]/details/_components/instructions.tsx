import { Playfair_Display } from 'next/font/google';
import { useEffect, useState } from 'react';

const PlayfairDisplay = Playfair_Display({ subsets: ['latin'] });

type InstructionsComponentProps = {
    index: number;
    recipeName: string;
    instructions: string;
};

/**
 * Renders an instruction component for a recipe, with a checkbox to mark the instruction as completed.
 * The checkbox state is stored in local storage so that it persists when the user refreshes the page.
 *
 * @param {InstructionsComponentProps} props - The component props.
 * @param {number} props.index - The index of the instruction.
 * @param {string} props.recipeName - The name of the recipe.
 * @param {string} props.instructions - The instructions for the recipe.
 * @return {JSX.Element} The rendered instruction component.
 */
const InstructionsComponent: React.FC<InstructionsComponentProps> = ({
    index,
    recipeName,
    instructions
}): JSX.Element => {
    /**
     * TODO:
     * I want to store the checkboxes states to localstorage
     * So that, when user refreshes; the checkboxes states remain
     */
    const [isChecked, setIsChecked] = useState(() => {
        // Load the initial state from localStorage if available
        const savedState = localStorage.getItem(
            `${'[instruction]' + recipeName}-${index}`
        );
        return savedState ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
        // Only save in the localstorage if checked
        // Otherwise, remove from the localstorage
        if (isChecked) {
            localStorage.setItem(
                `${'[instruction]' + recipeName}-${index}`,
                JSON.stringify(isChecked)
            );
        } else {
            localStorage.removeItem(`[instruction]${recipeName}-${index}`);
        }
    }, [isChecked, index]);

    const handleCheckboxChange = () => {
        setIsChecked((prevState: Boolean) => !prevState);
    };

    const ingredientsLength: number = instructions.length;

    return (
        <div className="border-b border-border px-3 py-4">
            <div className="flex flex-row">
                <p
                    className={`${PlayfairDisplay.className} w-[60px] text-4xl font-bold`}>
                    {ingredientsLength >= 10
                        ? `${String(index + 1).padStart(2, '0')}`
                        : 'Ingredient'}
                </p>
                <div className="flex w-[60px] justify-center">
                    <input
                        type="checkbox"
                        className="h-5 w-5"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className="w-full">
                    <p
                        className={`relative ${isChecked ? 'text-gray-400' : ''} transition-all duration-500 ease-in-out`}>
                        {instructions.charAt(0).toUpperCase() +
                            instructions.slice(1)}
                        <span
                            className={`absolute left-0 top-1/4 h-[1px] w-full transform bg-current transition-transform duration-500 ease-in-out ${
                                isChecked ? 'scale-x-100' : 'scale-x-0'
                            }`}
                            style={{ transformOrigin: 'left' }}></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstructionsComponent;
