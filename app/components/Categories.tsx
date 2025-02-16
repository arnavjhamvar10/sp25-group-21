import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

// const img = require('../../assets/images/4.jpeg');
interface Category {
  id: number,
  imageUrl: string,
  name: string
}
const Categories = () => {
  const [categories, setCategories] = useState<Category>();
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
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;