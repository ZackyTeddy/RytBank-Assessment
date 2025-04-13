import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import * as LocalAuthentication from 'expo-local-authentication';
import { Transaction } from '@/types/transaction';
import { getAllTransactions } from '@/server/transactions';
import { cyberpunkColors } from '@/components/styles';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function TransactionsScreen() {
  const [verified, setVerified] = useState(false);
  const handleTransactionPress = async (id: string) => {
    try {
      // Web-specific authentication flow
      if (Platform.OS === 'web') {
        // For web, directly navigate without biometric authentication
        router.push(`/transaction/${id}`);
        setVerified(true);
        return;
      }

      if(!verified) {
        const result = await LocalAuthentication.authenticateAsync({
          promptMessage: 'Authenticate to view transaction details',
        });
  
        if (result.success) {
          setVerified(true);
          router.push(`/transaction/${id}`);
        }
      } else {
        // If already verified, directly navigate
        router.push(`/transaction/${id}`);
      }
      // Native platform authentication
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <TouchableOpacity
      style={styles.transactionItem}
      onPress={() => handleTransactionPress(item.id)}
    >
      <LinearGradient
        colors={['rgba(203, 56, 186, 0.1)', 'rgba(22, 33, 62, 0.1)']}
        style={styles.gradientCard}
      >
        <View style={styles.transactionContent}>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.amount}>****</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const getTransactions = async () => {
    setIsRefreshing(true);
    const transactions = await getAllTransactions();
    setTransactionsList(transactions);
    setIsRefreshing(false);
  };

  useEffect(() => {
    getTransactions();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRANSACTIONS</Text>
      <FlatList
        data={transactionsList}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        onRefresh={getTransactions}
        refreshing={isRefreshing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cyberpunkColors.background,
    padding: 20,
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 28,
    color: cyberpunkColors.neonPurple,
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  transactionItem: {
    marginBottom: 15,
  },
  gradientCard: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: cyberpunkColors.neonBlue,
  },
  transactionContent: {
    padding: 20,
  },
  description: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  amount: {
    fontFamily: 'Orbitron',
    fontSize: 20,
    color: cyberpunkColors.neonBlue,
    marginBottom: 8,
  },
  date: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#666',
  },
});