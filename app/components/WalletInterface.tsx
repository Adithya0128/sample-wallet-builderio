"use client";

import React, { useState } from "react";
import { StatusBar } from "./StatusBar";
import { WalletHeader } from "./WalletHeader";
import { WalletBalance } from "./WalletBalance";
import { TransactionFilters } from "./TransactionFilters";
import { TransactionList } from "./TransactionList";
import { BottomNavigation } from "./BottomNavigation";
import { Transaction, FilterType } from "./types";

export const WalletInterface: React.FC = () => {
  const [balance] = useState(() => 35000);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("Today");
  const [transactions] = useState<Transaction[]>(() => [
    {
      id: 1,
      company: "Microsoft",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1910b8b25d4ea413737c763c194b68ca5c7afd0",
      amount: 3500,
      status: "completed",
      date: "02:39pm , 19th feb'25",
    },
    {
      id: 2,
      company: "Amazon",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cfe394c65467174ff6e3eb21480705ebcd4dece",
      amount: 2500,
      status: "pending",
      date: "07:44pm , 18th feb'25",
    },
    {
      id: 3,
      company: "Swiggy",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/689705a4e864d24b2ed9fb2972983058f93c2a49",
      amount: 3000,
      status: "completed",
      date: "04:56pm , 18th feb'25",
    },
    {
      id: 4,
      company: "Zepto",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e3be4bb0a603df0393c56eff0191452db47054f",
      amount: 3500,
      status: "completed",
      date: "02:28pm , 18th feb'25",
    },
  ]);

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  const handleNavigateBack = () => {
    console.log("Navigate back");
  };

  const handleManageAccount = () => {
    console.log("Open account management");
  };

  const handleChangeUpiId = () => {
    console.log("Change UPI ID");
  };

  return (
    <main className="flex flex-col items-center bg-white h-[828px] w-[390px]">
      <div className="flex flex-col gap-4 h-[740px] w-[358px]">
        <div className="flex flex-col gap-4 w-[358px]">
          <StatusBar />
        </div>
        <WalletHeader onBackClick={handleNavigateBack} />
        <WalletBalance
          balance={balance}
          onChangeUpiId={handleChangeUpiId}
          onManageAccount={handleManageAccount}
        />
        <h2 className="h-6 text-lg leading-6 text-black">History</h2>
        <TransactionFilters
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        <TransactionList transactions={transactions} />
      </div>
      <BottomNavigation />
    </main>
  );
};

export default WalletInterface;
