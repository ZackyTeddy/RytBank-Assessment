import { Image, StyleSheet, Platform, Button, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconFingerprint } from '@tabler/icons-react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import sendAlert from '@/lib/util/sendAlert';
import { router } from 'expo-router';
import {styles} from '@/components/styles';

export default function LoginScreen() {

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  const handleBiometricsAuth = async () => {
    const isBiometricSupported = await LocalAuthentication.hasHardwareAsync();

    let supportedBiometrics;
    if(isBiometricSupported) {
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    if(!isBiometricSupported || (supportedBiometrics && supportedBiometrics.length === 0)) {
      sendAlert({
        title: 'Error',
        message: 'No biometric authentication available',
        onPress: () => {},
        buttonText: 'OK',
      });
      return;
    }
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    if(!isBiometricEnrolled) {
      sendAlert({
        title: 'Error',
        message: 'No biometric authentication enrolled',
        onPress: () => {},
        buttonText: 'OK',
      });
      return;
    }
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Use Passcode',
      cancelLabel: 'Cancel',
      disableDeviceFallback: true,
    });

    if(biometricAuth.success) {
      sendAlert({
        title: 'Success',
        message: 'Authentication successful',
        onPress: () => { router.replace('/(tabs)') },
        buttonText: 'Enter App',
      });
    }
  } 

  useEffect(() => {
    (async() => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  },[])

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.text}>Welcome</ThemedText>
        <Pressable onPress={handleBiometricsAuth} style={styles.biometricButton}>
          <IconFingerprint size={28} color="#FFFFFF" />  
        </Pressable>        
      </ThemedView>
    </ParallaxScrollView>
  );
}
