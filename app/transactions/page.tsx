import { AddTransactionButton } from "../_components/add-transaction-button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({
    orderBy: {
      date: "desc",
    },
  });

  const stringifiedTransactions = JSON.stringify(transactions, null, 2);

  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransactionButton />
      </div>

      <DataTable
        columns={transactionColumns}
        data={JSON.parse(stringifiedTransactions)}
      />
    </div>
  );
}
