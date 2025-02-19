import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }], // Dark background for the map
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }], // Matches the background for cleaner labels
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }], // Muted brown for labels
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }], // Highlighted city names
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }], // Focus on points of interest
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }], // Dark green for parks
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }], // Softer green for park labels
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }], // Dark gray for roads
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }], // Subtle strokes for road boundaries
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }], // Slightly highlighted highways
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }], // Darker strokes for highways
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }], // Bright labels for highway text
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }], // Muted transit paths
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }], // Highlighted transit stations
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }], // Deep blue for water bodies
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }], // Muted labels for water
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }], // Matches water background
  },
];


const TrackingScreen = () => {
  const [plateNumber, setPlateNumber] = useState("");

  const handleSearch = () => {
    if (plateNumber.trim() === "") {
      Alert.alert("Error", "Please enter a motorcyclist's plate number.");
      return;
    }
    Alert.alert("Search", `Searching for motorcyclist with plate: ${plateNumber}`);
  };

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.970579, // Kigali latitude
          longitude: 30.104429, // Kigali longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
        customMapStyle={darkMapStyle}
      >
        {/* Example marker */}
        <Marker
          coordinate={{
            latitude: -1.970579,
            longitude: 30.104429,
          }}
          title="Kigali"
          description="Welcome to Kigali, Rwanda!"
        />
      </MapView>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by plate number"
          placeholderTextColor="#999"
          value={plateNumber}
          onChangeText={setPlateNumber}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    color: "black",
    fontSize: 16,
    marginRight: 10,
  },
});

export default TrackingScreen;