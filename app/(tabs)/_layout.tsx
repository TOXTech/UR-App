import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Charts from "./charts";
import Dashboard from "./dashboard";
import Tracking from "./tracking";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#00D9FF", // Active tab icon/text color
        tabBarInactiveTintColor: "#7E7E8C", // Inactive tab icon/text color
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="dashboard" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Tracking}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Charts"
        component={Charts}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bar-chart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#161622", // Bottom navigation background color
    borderTopWidth: 0, // Removes the top border
    height: 60, // Optional: adjust height if needed
  },
});