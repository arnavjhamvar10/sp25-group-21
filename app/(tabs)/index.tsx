import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
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
} from 'react-native';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<any[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const marqueeItems = [
    { id: 1, text: 'Free Delivery on Your First Order!', color: '#FF6B6B' },
    { id: 2, text: '20% Off on Selected Restaurants!', color: '#FFD93D' },
    { id: 3, text: 'New Cuisines Added Daily!', color: '#6BCB77' },
  ];

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
              Current Location
              <Ionicons name="chevron-down" size={20} color="#4371A7" />
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
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#4371A7" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Categories />
        {featuredCategories.map((category) => (
          <FeaturedRow
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.description}
          />
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
  marqueeContainer: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
  },
  marqueeText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  scrollContent: {
    paddingBottom: 80,
    alignItems: 'center',
  },
  bottomSpacing: {
    height: 100,
  },
});

export default HomeScreen;