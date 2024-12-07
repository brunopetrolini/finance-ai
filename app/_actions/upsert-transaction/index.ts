"use server";

import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";

import { db } from "@/app/_lib/prisma";

import { upsertTransactionSchema } from "./schema";

interface TransactionData {
  id?: string;
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export async function upsertTransaction(data: TransactionData) {
  upsertTransactionSchema.parse(data);

  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (userId && userId !== data.id) {
    throw new Error("Forbidden");
  }

  await db.transaction.upsert({
    where: { id: data.id ?? "" },
    update: data,
    create: { ...data, userId },
  });

  revalidatePath("/transactions");
}
