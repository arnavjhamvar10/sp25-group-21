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
              <Ionicons name="chevron-down" size={20} color="#8B9C9B" />
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={35} color="#8B9C9B" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" style={styles.searchInput} />
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#8B9C9B" />
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
    backgroundColor: '#8B9C9B',
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
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
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