import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

// Dummy restaurant data
const restaurantCategories = [
  {
    id: '1',
    title: 'Top Rated',
    description: 'Highly rated restaurants',
    restaurants: [
      { id: '101', name: 'Pizza Palace', image: 'https://via.placeholder.com/150' },
      { id: '102', name: 'Sushi Central', image: 'https://via.placeholder.com/150' },
      { id: '103', name: 'Burger Hub', image: 'https://via.placeholder.com/150' },
      { id: '104', name: 'Pasta House', image: 'https://via.placeholder.com/150' },
    ],
  },
  {
    id: '2',
    title: 'Fast Food',
    description: 'Quick and delicious',
    restaurants: [
      { id: '201', name: 'McBurger', image: 'https://via.placeholder.com/150' },
      { id: '202', name: 'Fries & More', image: 'https://via.placeholder.com/150' },
      { id: '203', name: 'Fried Chicken Spot', image: 'https://via.placeholder.com/150' },
      { id: '204', name: 'Taco Fiesta', image: 'https://via.placeholder.com/150' },
    ],
  },
  {
    id: '3',
    title: 'Healthy Choices',
    description: 'Fresh and nutritious',
    restaurants: [
      { id: '301', name: 'Green Bowl', image: 'https://via.placeholder.com/150' },
      { id: '302', name: 'Smoothie Heaven', image: 'https://via.placeholder.com/150' },
      { id: '303', name: 'Vegan Delights', image: 'https://via.placeholder.com/150' },
      { id: '304', name: 'Organic Bites', image: 'https://via.placeholder.com/150' },
    ],
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <Image style={styles.profileImage} source={{ uri: 'https://via.placeholder.com/56' }} />
        <View style={styles.locationContainer}>
          <Text style={styles.deliveryText}>Deliver Now?</Text>
          <TouchableOpacity>
            <Text style={styles.currentLocation}>
              Current Location <Ionicons name="chevron-down" size={20} color="#4371A7" />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={35} color="#4371A7" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" style={styles.searchInput} />
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#4371A7" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Categories />

        {/* Restaurant Rows */}
        {restaurantCategories.map((category) => (
          <View key={category.id} style={styles.featuredRowContainer}>
            <View style={styles.rowHeader}>
              <Text style={styles.rowTitle}>{category.title}</Text>
              <TouchableOpacity>
                <Ionicons name="arrow-forward" size={24} color="#4371A7" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={category.restaurants}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.restaurantCard}>
                  <Image source={{ uri: item.image }} style={styles.restaurantImage} />
                  <Text style={styles.restaurantName}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        ))}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  profileImage: {
    height: 56,
    width: 56,
    backgroundColor: '#4371A7',
    borderRadius: 28,
  },
  locationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  deliveryText: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  currentLocation: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
    width: '100%',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    flex: 1,
    padding: 10,
    borderRadius: 8,
    marginRight: 5,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
    alignItems: 'center',
  },
  featuredRowContainer: {
    width: '100%',
    marginVertical: 10,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 5,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  restaurantImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  bottomSpacing: {
    height: 100,
  },
});

export default HomeScreen;
