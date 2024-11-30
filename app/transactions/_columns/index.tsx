// 00:35:52

"use client";

import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import { TransactionTypeBadge } from "../_components/type-bagde";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: (row) => (
      <TransactionTypeBadge
        transactionType={row.getValue() as TransactionType}
      />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: (row) => {
      return Number(row.getValue()).toLocaleString("pt-BR", {
        currency: "BRL",
        style: "currency",
      });
    },
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
