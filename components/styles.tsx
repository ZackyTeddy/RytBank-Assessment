import { StyleSheet } from 'react-native';

export const cyberpunkColors = {
  background: '#0d0d0d',         // near-black
  surface: '#1a1a1a',            // dark surface
  neonPurple: '#9b59ff',         // neon purple accent
  neonBlue: '#00ffff',           // optional extra pop
  textPrimary: '#ffffff',        // clean white text
  textSecondary: '#b3b3b3',      // subtle gray text
  borderGlow: '#9b59ff',         // reused for border shadows
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cyberpunkColors.background,
    padding: 20,
  },
  card: {
    backgroundColor: cyberpunkColors.surface,
    borderColor: cyberpunkColors.neonPurple,
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: cyberpunkColors.borderGlow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  text: {
    color: cyberpunkColors.textPrimary,
    fontSize: 16,
		fontFamily: 'Orbitron_500Medium',
  },
  heading: {
    color: cyberpunkColors.neonPurple,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    backgroundColor: cyberpunkColors.neonPurple,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: cyberpunkColors.borderGlow,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 12,
    elevation: 12,
  },
  buttonText: {
    color: cyberpunkColors.background,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
		fontFamily: 'Orbitron_700Bold',
  },
	titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  biometricButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    padding: 8,
  }
});
