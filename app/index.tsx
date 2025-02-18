import { Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

SplashScreen.preventAutoHideAsync(); // Prevent splash screen from auto-hiding

const InitialRoute = () => {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  // Hide the splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Keep the splash screen visible until fonts are loaded
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../assets/images/logo 1.png')} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>Discover Endless Possibilities with EMOTO</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.push('(auth)/login')}>
        <Text style={styles.buttonText}>Welcome to E-moto</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default InitialRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10323b',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 1,
  },
  text: {
    color: '#fff',
    fontSize: 32,
    top: -30,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
  },
  button: {
    backgroundColor: '#0195AF',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});