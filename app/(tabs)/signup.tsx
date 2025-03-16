import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';  // Use expo-router for navigation
import 'react-native-gesture-handler';  // Ensure gesture handler is imported first

export default function SignUpScreen() { 
  const router = useRouter(); // Use router instead of navigation

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
        <Text style={styles.title}>Register</Text>
        
        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="Full Name" style={styles.input} />
        </View>
        
        <View style={styles.inputContainer}>
          <Feather name="at-sign" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="Email ID" style={styles.input} keyboardType="email-address" />
        </View>
        
        <View style={styles.inputContainer}>
          <Feather name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        </View>
        
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        
        {/* Social Login */}
        <Text style={styles.orText}>Or, login with ...</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="twitter" size={24} color="skyblue" />
          </TouchableOpacity>
        </View>
        
        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an Account? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>  
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1, paddingBottom: 50 },
  container: { flex: 1, backgroundColor: '#F8F8F8', alignItems: 'center', paddingTop: 50 },
  image: { width: 300, height: 180, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16 },
  registerButton: { backgroundColor: 'purple', width: '90%', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  registerText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  orText: { marginVertical: 15, fontSize: 16, color: 'gray' },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '60%' },
  socialButton: { backgroundColor: '#fff', padding: 10, borderRadius: 10, elevation: 3 },
  loginContainer: { flexDirection: 'row', marginTop: 20, marginBottom: 40 },
  loginText: { fontSize: 16, color: 'gray' },
  loginLink: { fontSize: 16, color: 'purple', fontWeight: 'bold' },
});
