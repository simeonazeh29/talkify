import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';

export default function Onboarding() {
  const router = useRouter();

  // Shared values for animations
  const welcomeOpacity = useSharedValue(0);
  const subTextOpacity = useSharedValue(0);

  useEffect(() => {
    // Start animations
    welcomeOpacity.value = withTiming(1, { duration: 1000 });
    subTextOpacity.value = withDelay(500, withTiming(1, { duration: 1000 }));

    // Automatically redirect to the login screen after 3 seconds
    const timer = setTimeout(() => {
      router.push('/auth/login');
    }, 3000); // 3-second delay before redirect

    return () => clearTimeout(timer);
  }, [router, welcomeOpacity, subTextOpacity]);

  // Animated styles for the texts
  const welcomeTextStyle = useAnimatedStyle(() => ({
    opacity: welcomeOpacity.value,
    transform: [{ translateY: withTiming(welcomeOpacity.value * -10) }],
  }));

  const subTextStyle = useAnimatedStyle(() => ({
    opacity: subTextOpacity.value,
    transform: [{ translateY: withTiming(subTextOpacity.value * -10) }],
  }));

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')} // Ensure correct path to your image
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Animated.Text style={[styles.welcomeText, welcomeTextStyle]}>
          Talkify...
        </Animated.Text>
        <Animated.Text style={[styles.subText, subTextStyle]}>
          Connecting students one a time...
        </Animated.Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
  },
});
