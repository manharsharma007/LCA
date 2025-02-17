import { ColumnDef } from "@tanstack/react-table";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ReportDef = {
  impactCategory: string;
  unit: string;
  total: string;
  manufacturing: string;
  transportSupplier: string;
  washing: string;
  washingWater: string;
  detergent: string;
  drying: string;
  transport: string;
  eol: string;
};

export const columns: ColumnDef<ReportDef>[] = [
  {
    accessorKey: "impactCategory",
    header: "Impact Category",
  },
  {
    accessorKey: "unit",
    header: "Unit",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "manufacturing",
    header: "Materials Manufacturing",
  },
  {
    accessorKey: "transportSupplier",
    header: "Transportation to RZ",
  },
  {
    accessorKey: "washing",
    header: "Washing-Energy consumption",
  },
  {
    accessorKey: "washingWater",
    header: "Washing-Water consumption",
  },
  {
    accessorKey: "detergent",
    header: "Detergent",
  },
  {
    accessorKey: "drying",
    header: "Drying",
  },
  {
    accessorKey: "transport",
    header: "Transport to Healthcare",
  },
  {
    accessorKey: "eol",
    header: "EOL",
  },
];
