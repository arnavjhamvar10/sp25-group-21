import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

interface Restaurant {
    id: number;
    name: string;
    rating: number;
    latitude: number;
    longitude: number;
}

const Mappi: React.FC = () => {
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let userLocation = await Location.getCurrentPositionAsync({});
            setLocation(userLocation.coords);

            // Simulating fetching restaurant data
            setRestaurants([
                { id: 1, name: "Pasta Paradise", rating: 4.5, latitude: userLocation.coords.latitude + 0.002, longitude: userLocation.coords.longitude + 0.002 },
                { id: 2, name: "Burger Bistro", rating: 4.2, latitude: userLocation.coords.latitude - 0.002, longitude: userLocation.coords.longitude - 0.002 },
                { id: 3, name: "Sushi Central", rating: 4.8, latitude: userLocation.coords.latitude + 0.003, longitude: userLocation.coords.longitude - 0.003 }
            ]);
        })();
    }, []);

    if (errorMsg) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{errorMsg}</Text>
            </View>
        );
    }

    if (!location) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#FF5733" />
                <Text>Fetching your location...</Text>
            </View>
        );
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
        >
            {restaurants.map((restaurant) => (
                <Marker
                    key={restaurant.id}
                    coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
                    title={restaurant.name}
                >
                    <Callout>
                        <View style={styles.callout}>
                            <Text style={styles.calloutTitle}>{restaurant.name}</Text>
                            <Text>⭐ {restaurant.rating}</Text>
                        </View>
                    </Callout>
                </Marker>
            ))}
        </MapView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
    map: {
        flex: 1,
    },
    callout: {
        padding: 10,
    },
    calloutTitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default Mappi;
