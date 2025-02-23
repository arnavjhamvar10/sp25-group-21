import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import RestaurantCard from './RestaurantCard';
import { StyleSheet } from 'react-native';

interface FeaturedRowProps {
  id: number;
  title: string;
  description: string;
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState<any[]>([]); 

  return (
    <View>
      <View className="mt-4 px-4 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name="arrow-forward" size={33} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
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

export default FeaturedRow;
