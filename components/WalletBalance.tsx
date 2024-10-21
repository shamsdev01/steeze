'use client';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface WalletBalanceProps {
  balance?: number;  // Making balance optional
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ balance }) => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const formattedBalance = balance !== undefined ? balance.toLocaleString() : '1000';

  return (
    <div className="rounded-lg p-4 text-white">
      <h2 className="text-xl mb-2">Wallet Balance</h2>
      <div className="flex items-center space-x-2">
        <p className="text-3xl font-bold">
          {isBalanceVisible ? `$${formattedBalance}` : '••••••'}
        </p>
        <button
          onClick={toggleBalanceVisibility}
          className="text-gray-400 hover:text-white transition-colors focus:outline-none"
          aria-label={isBalanceVisible ? "Hide balance" : "Show balance"}
        >
          {isBalanceVisible ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      </div>
    </div>
  );
};

export default WalletBalance;