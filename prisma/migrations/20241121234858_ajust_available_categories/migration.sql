/*
  Warnings:

  - The values [ENTERNTAINMENT] on the enum `TransactionCategory` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `amout` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `amount` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionCategory_new" AS ENUM ('HOUSING', 'TRANSPORTATION', 'FOOD', 'ENTERTAINMENT', 'HEALTH', 'UTILITIES', 'SALARY', 'EDUCATION', 'OTHER');
ALTER TABLE "transactions" ALTER COLUMN "category" TYPE "TransactionCategory_new" USING ("category"::text::"TransactionCategory_new");
ALTER TYPE "TransactionCategory" RENAME TO "TransactionCategory_old";
ALTER TYPE "TransactionCategory_new" RENAME TO "TransactionCategory";
DROP TYPE "TransactionCategory_old";
COMMIT;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "amout",
ADD COLUMN     "amount" DECIMAL(10,2) NOT NULL;