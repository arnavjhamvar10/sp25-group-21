import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: 'gray',
    paddingHorizontal: 4,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});

export default Categories;