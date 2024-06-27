type IngredientsComponentProps = {
    ingredients: string;
};

const IngredientsComponent: React.FC<IngredientsComponentProps> = ({
    ingredients
}): JSX.Element => {
    return (
        <div>
            {/* <Checkbox /> */}
            <h1>{ingredients}</h1>
        </div>
    );
};

export default IngredientsComponent;
