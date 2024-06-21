import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Create = () => {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [psychologists, setPsychologists] = useState([]);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      console.log('Location:', loc);
    } catch (error) {
      console.error('Error getting location:', error);
      setErrorMsg('Error getting location');
    }
  };

  const getNearbyPsychologists = async () => {
    if (!location) {
      Alert.alert("Location not available", "Please get your current location first.");
      return;
    }

    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch('http://localhost:3000/psicologos');
      const data = await response.json();
      setPsychologists(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Error fetching data", "There was an error fetching the data for nearby psychologists.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {region ? (
        <MapView style={styles.map} region={region} onRegionChangeComplete={setRegion}>
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Your Location"
            />
          )}
          {psychologists.map((psychologist, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: psychologist.latitude,
                longitude: psychologist.longitude,
              }}
              title={psychologist.name}
              description={psychologist.address}
            />
          ))}
        </MapView>
      ) : (
        <Text style={styles.loadingText}>Loading map...</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button title="Get Current Location" onPress={getLocation} />
        <Button title="Find Nearby Psychologists" onPress={getNearbyPsychologists} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
  loadingText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Create;
