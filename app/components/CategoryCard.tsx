import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

interface CategoryCardProps {
  imgUrl: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;