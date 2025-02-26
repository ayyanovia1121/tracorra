import { Coins, LayoutGrid, ShieldCheck, ShoppingBag, Wallet } from "lucide-react";

export const menuList = [
  {
    name: "Dashboard",
    icon: LayoutGrid,
    path: "/dashboard",
  },
  {
    name: "Incomes",
    icon: Coins,
    path: "/incomes",
  },
  {
    name: "Budgets",
    icon: Wallet,
    path: "/budgets",
  },
  {
    name: "Expenses",
    icon: ShoppingBag,
    path: "/expenses",
  },
  {
    name: "Upgrade",
    icon: ShieldCheck,
    path: "/upgrade",
  }
];