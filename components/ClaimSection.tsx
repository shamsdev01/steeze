'use client'
import React, { useState } from 'react';
import WalletBalance from './WalletBalance';
// import { ChevronRight } from 'lucide-react';

const ClaimSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [amount, setAmount] = useState('');
  const [rangeValue, setRangeValue] = useState(50);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setRangeValue(value);
    const calculatedAmount = (value / 100) * 1000;
    setAmount(calculatedAmount.toFixed(2));
  };

  return (
    <div className="bg-[#001F3F] rounded-lg p-4 sm:p-6 text-white">
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          {/* <h3 className="font-bold text-xl sm:text-2xl">Wallet Balance</h3>
          <span className="text-xl sm:text-2xl font-bold">$10,000</span> */}
          <WalletBalance/>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold">Claim</h2>
            <span className="text-sm sm:text-base">
              The following are the claimable amounts<br />
              under each asset, click the asset you want to claim
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-around items-center mb-6 gap-4">
        {['TON', 'BNB', 'ETH'].map((asset, index) => (
          <button key={asset} className="border-[2px] border-[#288232] bg-gradient-to-r from-[#003366] to-[#4a90e2] text-white flex w-full sm:w-[150px] rounded-full py-2 px-2 justify-center items-center text-sm hover:from-[#004080] hover:to-[#4a90e2] transition-colors">
            <p className="text-sm mb-1">{asset}</p>
            <span className="ml-2 text-xs">${['1000', '2000', '50'][index]}</span>
          </button>
        ))}
      </div>

      {/* Dropdown Selection */}
      <div className="w-full flex flex-col mb-4">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="w-full sm:max-w-[40%] p-3 bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-blue-400"
        >
          <option className='text-black' value="" disabled>Choose Assets</option>
          <option className='text-black' value="mass">TON</option>
          <option className='text-black' value="option2">ETH</option>
          <option className='text-black' value="option3">BNB</option>
        </select>
      </div>

      {/* Amount Input with Range Slider */}
      <div className="w-full flex flex-col mb-4">
        <div className="relative w-full sm:max-w-[40%]">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            placeholder="Enter Amount"
          />
          <div className="flex items-center mt-2">
            <span className="text-xs text-gray-400 mr-2">Min</span>
            <input
              type="range"
              min="0"
              max="100"
              value={rangeValue}
              onChange={handleRangeChange}
              className="w-3/4 sm:w-2/3"
            />
            <span className="text-xs text-gray-400 ml-2">Max</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-400 text-sm mt-6 w-full sm:max-w-[40%]">
          <span className="mb-2 sm:mb-0">Validator Fee (0.1$)</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-white text-black rounded text-xs">USDT</button>
            <button className="px-2 py-1 bg-white text-black rounded text-xs">TON</button>
          </div>
        </div>
      </div>
      {/* Wallet Address Input */}
      <div className="relative mb-4 ">
        <input
          type="text"
          className="w-full sm:max-w-[40%] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
          placeholder="Wallet Address"
        />
        {/* <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-200 w-[20%]">✖</button> */}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-start gap-2 mb-6 w-full sm:w-[40%]">
        {['Claim', 'Air Drop', 'Free Gas Fee'].map((action, index) => (
          <button 
            key={action}
            className={`flex-1 text-white px-4 py-2 rounded-lg transition-colors text-sm ${
              index === 0 ? 'bg-[#0056b3] hover:bg-[#004080]' :
              index === 1 ? 'bg-[#28a745] hover:bg-[#218838]' :
              'bg-[#ffc107] hover:bg-[#e0a800] border border-[#ff4c00]'
            }`}
          >
            {action}
          </button>
        ))}
      </div>

      <div className="mt-4 text-right">
        <button className="text-[#4a90e2] flex items-center justify-end w-full text-sm">
          {/* <span className="mr-1">Gas Settings</span> */}
          {/* <ChevronRight size={14} /> */}
        </button>
      </div>
    </div>
  );
};

export default ClaimSection;