import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

// const img = require('../../assets/images/4.jpeg');
interface Category {
  _id: number,
  imageUrl: string,
  name: string
}
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        padding: 12,
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={`${category.imageUrl}?width=200`}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;