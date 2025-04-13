import { TRANSACTIONS } from '@/constants/transactions';
import { Transaction } from '@/types/transaction';

export function createTransaction(data: Transaction): Transaction {
  return {
    id: data.id,
    description: data.description,
    amount: data.amount,
    type: data.type,
    date: data.date,
  };
}

export function getTransaction(id: string): Transaction | undefined {
  return TRANSACTIONS.find((transaction) => transaction.id === id);
}

export function getAllTransactions(): Transaction[] {
  return TRANSACTIONS;
}