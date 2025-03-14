import { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 1000, 
      useNativeDriver: true, 
    }).start();
  }, [fadeAnim]);

  const handleGetStarted = () => {
    navigation.navigate('Next Screen' as never);
  };

  return (
    <Animated.View style={{ ...styles.background, opacity: fadeAnim }}>
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
    </Animated.View>
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
    fontFamily: 'Poppins', 
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