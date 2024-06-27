import { useState } from 'react';

type InstructionsComponentProps = {
    index: number;
    instructions: string;
};

const InstructionsComponent: React.FC<InstructionsComponentProps> = ({
    index,
    instructions
}): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const ingredientsLength: number = instructions.length;

    return (
        <div className="grid border-b border-border px-3 py-4 md:grid-cols-[0.13fr_0.07fr_1fr] lg:grid-cols-[0.1fr_0.05fr_1fr]">
            <p className="text-4xl font-bold">
                {ingredientsLength >= 10
                    ? `${String(index + 1).padStart(2, '0')}`
                    : 'Ingredient'}
            </p>
            <div className="">
                <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
            </div>
            <p
                className={`relative ${isChecked ? 'text-gray-400' : ''} transition-all duration-500 ease-in-out`}>
                {instructions.charAt(0).toUpperCase() + instructions.slice(1)}
                <span
                    className={`absolute left-0 top-1/4 h-[1px] w-full transform bg-current transition-transform duration-500 ease-in-out ${
                        isChecked ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ transformOrigin: 'left' }}></span>
            </p>
        </div>
    );
};

export default InstructionsComponent;
