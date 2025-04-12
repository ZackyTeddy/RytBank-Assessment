import { TRANSACTION_DATABASE } from "@/constants/Database";


export function GET(_request: Request, { id }: Record<string, string>) {
	const transaction = TRANSACTION_DATABASE.find((transaction) => transaction.id === id);

	return Response.json(
		{ transaction: transaction }
	)
}