import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Animated, SafeAreaView } from 'react-native';
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
    <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
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
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
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
    paddingLeft: 60,          
    paddingBottom: 30,       
  },
  title: {
    fontSize: 35,
    fontFamily: 'Poppins',
    color: '#fff',
    textAlign: 'left',         
    lineHeight: 50,            
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignSelf: 'center',       
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default OnboardingScreen;
