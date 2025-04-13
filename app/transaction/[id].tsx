import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getTransaction } from '@/server/transactions';
import { TransactionType } from '@/types/transaction';
import { cyberpunkColors } from '@/components/styles';

export default function TransactionDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const transaction = getTransaction(id);

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Transaction not found</Text>
      </View>
    );
  }

  return (
    <View
	      style={styles.container}
    >
      <Text style={styles.title}>TRANSACTION DETAILS</Text>
      <View style={styles.card}>
        <LinearGradient
          colors={cyberpunkColors.linearGradientBackground}
          style={styles.gradientCard}
        >
          <Text style={styles.label}>DESCRIPTION</Text>
          <Text style={styles.value}>{transaction.description}</Text>

          <Text style={styles.label}>AMOUNT</Text>
          <Text style={[
            styles.amount,
            { color: transaction.type === TransactionType.CREDIT ? '#4CAF50' : '#e94560' }
          ]}>
            {transaction.type === TransactionType.CREDIT ? '+' : '-'}${transaction.amount}
          </Text>

          <Text style={styles.label}>TYPE</Text>
          <Text style={styles.value}>{transaction.type.toUpperCase()}</Text>

          <Text style={styles.label}>DATE</Text>
          <Text style={styles.value}>{transaction.date}</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		backgroundColor: cyberpunkColors.background,
  },
  title: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 28,
    color: cyberpunkColors.neonPurple,
    marginTop: 60,
    marginBottom: 30,
  },
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: cyberpunkColors.neonBlue,
  },
  gradientCard: {
    padding: 20,
  },
  label: {
    fontFamily: 'Orbitron',
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  amount: {
    fontFamily: 'Orbitron-Bold',
    fontSize: 24,
    marginBottom: 20,
  },
  errorText: {
    fontFamily: 'Orbitron',
    fontSize: 18,
    color: cyberpunkColors.errorText,
    textAlign: 'center',
    marginTop: 60,
  },
});