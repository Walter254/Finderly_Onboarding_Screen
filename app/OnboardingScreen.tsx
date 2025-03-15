import React, { useEffect, useRef } from 'react';
import { 
  View, Text, ImageBackground, StyleSheet, TouchableOpacity, 
  Animated, SafeAreaView, Dimensions, PixelRatio 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleGetStarted = () => {
    navigation.navigate('Next Screen' as never);
  };

  return (
    <Animated.View style={{ ...styles.container, opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
      <ImageBackground 
        source={require('../assets/finderly_back_2.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <SafeAreaView style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Snap or</Text>
            <Text style={styles.title}>Upload a Photo</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingBottom: 60, 
  },
  textContainer: {
    alignSelf: 'flex-start',  
    paddingLeft: width * 0.15,  
    paddingBottom: 30,       
  },
  title: {
    fontSize: PixelRatio.getFontScale() * 30,  // Dynamic scaling
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',         
    lineHeight: 50,            
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 13,  
    borderRadius: 30,
    width: width * 0.8,  // Scales button width to 80% of screen
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OnboardingScreen;
