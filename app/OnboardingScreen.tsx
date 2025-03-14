import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const OnboardingScreen = () => {
  const handleGetStarted = () => {
    Alert.alert("Next Screen", "This is where the next screen would be.");
  };

  return (
    <ImageBackground 
      source={require('../assets/finderly.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Our App!</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins', // Ensure you have the Poppins font loaded
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OnboardingScreen; 