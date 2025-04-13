import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import * as LocalAuthentication from 'expo-local-authentication';
import { LinearGradient } from 'expo-linear-gradient';
import { Lock, Fingerprint } from 'lucide-react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function AuthScreen() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [hasBiometrics, setHasBiometrics] = useState(false);

  useEffect(() => {
    checkBiometrics();
  }, []);

  const checkBiometrics = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const enrolled = await LocalAuthentication.isEnrolledAsync();
    setHasBiometrics(compatible && enrolled);
  };

  const handleBiometricAuth = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to view transactions',
        fallbackLabel: 'Use password'
      });

      if (result.success) {
        router.replace('/(tabs)');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  const handlePasswordAuth = () => {
    if (password === process.env.EXPO_PUBLIC_PASSWORD) {
      router.replace('/(tabs)');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>REALLY SUPER SECURE TRANSACTIONS</Text>
        
        {hasBiometrics && (
          <TouchableOpacity 
            style={styles.biometricButton}
            onPress={handleBiometricAuth}
          >
            <Fingerprint size={32} color="#e94560" />
            <Text style={styles.buttonText}>Use Biometrics</Text>
          </TouchableOpacity>
        )}

        <View style={styles.passwordContainer}>
          <Lock size={24} color="#e94560" style={styles.lockIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handlePasswordAuth}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 30,
    color: '#e94560',
    marginBottom: 50,
    textAlign: 'center',
    textShadowColor: 'rgba(233, 69, 96, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    textOverflow: 'wrap',
    maxWidth: '90%',
  },
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(233, 69, 96, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e94560',
  },
  buttonText: {
    color: '#e94560',
    marginLeft: 10,
    fontFamily: 'Orbitron',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    maxWidth: 300,
  },
  lockIcon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
    color: '#fff',
    padding: 15,
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#e94560',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'Orbitron-Bold',
    fontSize: 18,
  },
  errorText: {
    color: '#e94560',
    marginTop: 20,
    fontFamily: 'Roboto',
  },
});