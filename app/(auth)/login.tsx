import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Placeholder for future Appwrite integration
  const handleSignIn = async () => {
    try {
      // Appwrite logic will go here in the future, e.g., using Appwrite SDK
      // Example: const response = await account.createSession(email, password);
      
      console.log('User signed in (Appwrite logic will go here):', email, password);
      router.replace('(tabs)/dashboard');
    } catch (err) {
      setError('Error signing in: ' + err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#B0B0B0"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#B0B0B0"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('/(auth)/signup')}>
          <Text style={{ color: '#fff', marginTop: 20 }}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161622',
    padding: 20,
  },
  button: {
    backgroundColor: '#0195AF',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#2B2B2B',
    borderRadius: 10,
    color: '#fff',
    paddingLeft: 15,
    marginBottom: 15,
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
});