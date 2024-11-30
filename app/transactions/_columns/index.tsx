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

import { TransactionTypeBadge } from "../_components/type-badge";

const TRANSACTION_CATEGORY_LABELS = {
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.OTHER]: "Outros",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.UTILITIES]: "Utilidades",
};

const TRANSACTION_PAYMENT_LABELS = {
  [TransactionPaymentMethod.BANK_SLIP]: "Boleto",
  [TransactionPaymentMethod.BANK_TRANSFER]: "Transferência",
  [TransactionPaymentMethod.CASH]: "Dinheiro",
  [TransactionPaymentMethod.CREDIT_CARD]: "Cartão de crédito",
  [TransactionPaymentMethod.DEBIT_CARD]: "Cartão de débito",
  [TransactionPaymentMethod.OTHER]: "Outros",
  [TransactionPaymentMethod.PIX]: "Pix",
};

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
