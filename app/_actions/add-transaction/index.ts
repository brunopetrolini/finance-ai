"use server";

import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

import { db } from "@/app/_lib/prisma";

import { addTransactionSchema } from "./schema";

interface TransactionData {
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export async function addTransaction(data: TransactionData) {
  addTransactionSchema.parse(data);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  await db.transaction.create({
    data: {
      ...data,
      userId,
    },
  });
}
