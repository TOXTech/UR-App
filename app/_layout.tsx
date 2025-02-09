import { Stack } from 'expo-router'; // Import Stack for routing
import { StatusBar } from 'expo-status-bar'; // Import StatusBar
import React from 'react';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/signup" />
        <Stack.Screen name="(auth)/Welcome" />
        <Stack.Screen name="(tabs)/_layout" />
      </Stack>
    </>
  );
}