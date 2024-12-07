"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "./ui/button";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

export function AddTransactionButton() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
}
