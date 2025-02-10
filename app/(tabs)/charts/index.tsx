import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Charts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Charts Screen</Text>
    </View>
  );
};

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

export default Charts;
