export type Transaction = {
	id: string;
	description: string;
	amount: number;
	type: TransactionType;
	createdAt: Date;
}

export enum TransactionType {
	DEBIT = "DEBIT",
	CREDIT = "CREDIT",
};