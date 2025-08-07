"use client";
import { useState } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { FiArrowDown, FiArrowDownCircle, FiArrowUpRight } from "react-icons/fi";

export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

const sampleTransactions: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

export default function TransactionTable() {
  const [transactions, setTransactions] = useState(sampleTransactions);
  const [sortCol, setSortCol] = useState<"date" | "amount" | null>(null);
  const [asc, setAsc] = useState(true);

  const sortBy = (col: "date" | "amount") => {
    const direction = sortCol === col ? !asc : true;
    const sorted = [...transactions].sort((a, b) => {
      if (col === "date") {
        return direction
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return direction ? a.amount - b.amount : b.amount - a.amount;
    });
    setSortCol(col);
    setAsc(direction);
    setTransactions(sorted);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="text-left text-sm font-medium text-gray-600 border-b">
            <th
              className="px-4 py-3 cursor-pointer flex items-center"
              onClick={() => sortBy("date")}
            >
              Date
              <FiArrowDownCircle className="ml-1 text-gray-400" />
            </th>
            <th className="px-4 py-3">Remark</th>
            <th
              className="px-4 py-3 cursor-pointer flex items-center justify-end"
              onClick={() => sortBy("amount")}
            >
              Amount
              <HiOutlineArrowsUpDown className="ml-1 text-gray-400" />
            </th>
            <th className="px-4 py-3">Currency</th>
            <th className="px-4 py-3">Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm text-gray-700">{tx.date}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{tx.remark}</td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                {tx.amount.toLocaleString(undefined, {
                  style: "currency",
                  currency: tx.currency,
                })}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">{tx.currency}</td>
              <td className="px-4 text-sm">
                <div className="w-fit px-2 py-1 rounded-xl flex items-center bg-gentle-gray/[9%]">
                  <GoDotFill
                    className={
                      tx.type === "Credit" ? "text-green-500" : "text-red-500"
                    }
                  />
                  <span className="ml-1">{tx.type}</span>
                </div>
              </td>
            </tr>
          ))}
          {transactions.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                No transactions to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// --- Sample Outputs as Comments ---
// console.log(sampleTransactions[0].amount.toLocaleString()) // "$3,000.00"
// console.log(sampleTransactions[1].type)                   // "Debit"
// console.log(sorted by date asc first row)                 // { id: "1", date: "2023-10-01", … }
// console.log(sorted by amount desc first row)              // { id: "1", amount: 3000, … }
