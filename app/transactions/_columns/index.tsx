"use client";

import {
  Transaction,
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { PencilIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_LABELS,
} from "@/app/_constants/transactions";

import { TransactionTypeBadge } from "../_components/type-badge";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: (row) => {
      const transactionType = row.getValue<TransactionType>();
      return <TransactionTypeBadge transactionType={transactionType} />;
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: (row) => {
      const category = row.getValue<TransactionCategory>();
      return TRANSACTION_CATEGORY_LABELS[category];
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
    cell: (row) => {
      const paymentMethod = row.getValue<TransactionPaymentMethod>();
      return TRANSACTION_PAYMENT_LABELS[paymentMethod];
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: (row) => {
      const date = row.getValue<Date>();
      return new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: (row) => {
      const amount = row.getValue<number>();
      return Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
      }).format(amount);
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => (
      <div className="space-x-1">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <PencilIcon />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Trash2Icon />
        </Button>
      </div>
    ),
  },
];
