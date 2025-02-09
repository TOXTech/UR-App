import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to E-moto</Text>
      <Button title="Get started" onPress={() => router.push('(auth)/login')} />
    </View>
  );
}
