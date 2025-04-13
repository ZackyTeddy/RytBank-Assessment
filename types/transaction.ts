export interface Transaction {
	id: string;
	description: string;
	amount: number;
	type: TransactionType;
	date: string;
}
export interface TransactionCreate extends Omit<Transaction, 'id'> {
	id: string;
}

export enum TransactionType {
	DEBIT = "DEBIT",
	CREDIT = "CREDIT",
};