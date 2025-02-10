import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign-up Screen</Text>
      <Button title="Go to Dashboard" onPress={() => router.replace('(tabs)/dashboard')} />
    </View>
  );
}
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