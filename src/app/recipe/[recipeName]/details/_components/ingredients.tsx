import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

type IngredientsComponentProps = {
    ingredients: string;
};

const IngredientsComponent: React.FC<IngredientsComponentProps> = ({
    ingredients
}): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Regular expression to capture quantity and ingredient
    const ingredientRegex =
        /^([\d/.\s-]+(?:cups|kg|pieces|tablespoons|head|thumb-sized|to taste)?\s*)?(.*)$/i;
    const matches = ingredients.match(ingredientRegex);

    const quantity = matches?.[1]?.trim() || '';
    const ingredientName = matches?.[2]?.trim() || ingredients;

    return (
        <div className="mt-[5px] flex justify-between px-3">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <p
                    className={`relative ${isChecked ? 'text-slate-500' : ''} transition-all duration-500 ease-in-out`}
                >
                    {ingredientName.charAt(0).toUpperCase() +
                        ingredientName.slice(1)}
                    <span
                        className={`absolute left-0 top-1/2 h-[1px] w-full transform bg-current transition-transform duration-500 ease-in-out ${
                            isChecked ? 'scale-x-100' : 'scale-x-0'
                        }`}
                        style={{ transformOrigin: 'left' }}
                    ></span>
                </p>
            </div>
            <div>
                <p className="text-slate-500">{quantity}</p>
            </div>
        </div>
    );
};

export default IngredientsComponent;
