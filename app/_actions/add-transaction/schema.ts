import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  name: z.string(),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionType),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  category: z.nativeEnum(TransactionCategory),
  date: z.date(),
});
