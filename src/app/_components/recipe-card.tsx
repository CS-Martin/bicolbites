/**
 * I have encountered a very weird bug .-.
 * Note: turns out the you can pass 'use client' to children 
 */

import { Recipe } from "@/types/recipe.types";
import React from "react";

const RecipeCard: React.FC<Recipe> = ({ id, name, ingredients, instructions }): JSX.Element => {
    return (
        <div>
            <h2>{name}</h2>
            {ingredients.map((ingredient, index: number) => (
                <p key={index}>{index + 1}. {ingredient}</p>
            ))}
        </div>
    );
};

export default RecipeCard;