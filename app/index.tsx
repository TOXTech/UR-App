import { useRouter } from 'expo-router';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const InitialRoute = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome to E-moto</Text>
        <Button title="Get started" onPress={() => router.push('(auth)/login')} />
      </View>
    </SafeAreaView>
  );
};

export default InitialRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161622',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});