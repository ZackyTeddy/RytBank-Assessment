import { TRANSACTION_DATABASE } from "@/constants/Database";

export function GET(){
	return Response.json(
		{transactions: TRANSACTION_DATABASE}
	)
}