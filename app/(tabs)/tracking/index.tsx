import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

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
      <StatusBar style="dark" />

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
          placeholder="Search for a motorcyclist"
          placeholderTextColor="#999"
          value={plateNumber}
          onChangeText={setPlateNumber}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="#fff" />
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
    backgroundColor: "#1E1E2D",
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
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
  },
});

export default TrackingScreen;