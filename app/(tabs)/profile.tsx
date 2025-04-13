import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const handleLogout = () => {
    router.replace('/(auth)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE</Text>
      <View style={styles.content}>
        <Text style={styles.text}>MY NAME HERE</Text>
        <Text style={styles.text}>ACCOUNT NUMBER: 8324832704732074313</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <LogOut size={24} color="#e94560" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 20,
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 28,
    color: '#e94560',
    marginTop: 60,
    marginBottom: 40,
  },
  content: {
    backgroundColor: 'rgba(233, 69, 96, 0.1)',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e94560',
  },
  text: {
    fontFamily: 'Orbitron',
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(233, 69, 96, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#e94560',
  },
  logoutText: {
    color: '#e94560',
    marginLeft: 10,
    fontFamily: 'Orbitron',
    fontSize: 16,
  },
});