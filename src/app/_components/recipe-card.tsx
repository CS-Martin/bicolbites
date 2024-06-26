/**
 * I have encountered a very weird bug .-.
 * Note: turns out the you can pass 'use client' to children
 */

import Image from 'next/image';
import React from 'react';
import { RecipeCard as RecipeCardProps } from '@/types/recipe.types';

const RecipeCard: React.FC<RecipeCardProps> = ({
  name,
  description,
  image
}): JSX.Element => {
  return (
    <div>
      <img src={image} alt={name} width={200} height={200} />
      <h2>{name}</h2>
    </div>
  );
};

export default RecipeCard;
