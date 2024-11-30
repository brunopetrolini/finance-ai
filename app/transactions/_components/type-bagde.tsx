import { TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

import { Badge } from "@/app/_components/ui/badge";

export interface TransactionTypeBadgeProps {
  transactionType: TransactionType;
}

export function TransactionTypeBadge({
  transactionType,
}: TransactionTypeBadgeProps) {
  switch (transactionType) {
    case TransactionType.DEPOSIT:
      return (
        <Badge className="bg-badge-primary bg-opacity-10 font-bold text-badge-primary hover:bg-badge-primary hover:bg-opacity-10">
          <CircleIcon size={10} className="mr-1 fill-badge-primary" />
          Depósito
        </Badge>
      );

    case TransactionType.EXPENSE:
      return (
        <Badge className="bg-badge-destructive bg-opacity-10 font-bold text-badge-destructive hover:bg-badge-destructive hover:bg-opacity-10">
          <CircleIcon size={10} className="mr-1 fill-badge-destructive" />
          Despesa
        </Badge>
      );

    default:
      return (
        <Badge className="bg-badge bg-opacity-10 font-bold text-badge hover:bg-badge hover:bg-opacity-10">
          <CircleIcon size={10} className="mr-1 fill-white" />
          Investimento
        </Badge>
      );
  }
}
