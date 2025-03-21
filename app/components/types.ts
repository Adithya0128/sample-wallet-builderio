export interface Transaction {
  id: number;
  company: string;
  logo: string;
  amount: number;
  status: "completed" | "pending";
  date: string;
}

export type FilterType = "Today" | "Weekly" | "Monthly";
