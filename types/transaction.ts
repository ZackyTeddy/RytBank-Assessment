export interface Transaction {
	id: string;
	description: string;
	amount: number;
	type: TransactionType;
	date: string;
}

export enum TransactionType {
	DEBIT = "DEBIT",
	CREDIT = "CREDIT",
};