import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';  

const LoginScreen = () => {
  const router = useRouter();  // Use router instead of navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Email ID" style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an Account? </Text>
        <TouchableOpacity onPress={() => router.push('/signup')}>  
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F8F8' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: { backgroundColor: '#fff', width: '90%', paddingHorizontal: 15, height: 50, marginBottom: 15, borderRadius: 10 },
  input: { flex: 1, fontSize: 16 },
  loginButton: { backgroundColor: 'purple', width: '90%', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  loginText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  signupContainer: { flexDirection: 'row', marginTop: 20 },
  signupText: { fontSize: 16, color: 'gray' },
  signupLink: { fontSize: 16, color: 'purple', fontWeight: 'bold' },
});

export default LoginScreen;
