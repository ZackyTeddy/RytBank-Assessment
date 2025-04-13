import { cyberpunkColors } from '@/components/styles';
import { Tabs } from 'expo-router';
import { CreditCard, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: cyberpunkColors.surface,
          borderTopColor: cyberpunkColors.neonPurple,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: cyberpunkColors.neonPurple,
        tabBarInactiveTintColor: '#666',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, size }) => (
            <CreditCard size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}