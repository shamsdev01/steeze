import React from 'react';
import { ChevronRight } from 'lucide-react';

const ClaimSection: React.FC = () => {
  return (
    <div className="bg-[#001F3F] rounded-lg p-6 text-white">
      <div className="flex justify-between mb-6">
        <div>
          <h3 className="font-bold text-2xl">Wallet Balance</h3>
          <span className="text-2xl font-bold">$10,000</span>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Claim</h2>
            <span>
              The following are the claimable amounts<br />
              under each asset, click the asset you want to claim
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center mb-6">
        <button className="border-[2px] border-[#288232] bg-gradient-to-r from-[#003366] to-[#4a90e2] text-white flex w-[150px] rounded-full py-2 px-2 justify-center items-center text-sm hover:from-[#004080] hover:to-[#4a90e2] transition-colors">
          <p className="text-sm mb-1">TON</p>
          <span className="ml-2 text-xs">$1000</span>
        </button>
        <button className="border-[2px] border-[#288232] bg-gradient-to-r from-[#003366] to-[#4a90e2] text-white flex w-[150px] rounded-full py-2 px-2 justify-center items-center text-sm hover:from-[#004080] hover:to-[#4a90e2] transition-colors">
          <p className="text-sm mb-1">BNB</p>
          <span className="ml-2 text-xs">$2000</span>
        </button>
        <button className="border-[2px] border-[#288232] bg-gradient-to-r from-[#003366] to-[#4a90e2] text-white flex w-[150px] rounded-full py-2 px-2 justify-center items-center text-sm hover:from-[#004080] hover:to-[#4a90e2] transition-colors">
          <p className="text-sm mb-1">ETH</p>
          <span className="ml-2 text-xs">$50</span>
        </button>
      </div>

      {/* Amount Input Field */}
      <div className="w-full flex flex-col ">
  <input
    type="text"
    required
    className="w-full max-w-[40%] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
    placeholder="Enter Amount"
  />
  <div className="flex justify-between items-center text-gray-400 text-sm mb-4 w-full max-w-[500px]">
    <span>Validator Fee (0.1$)</span>
    <div className="flex ml-20 gap-2 py-2">
      <button className="px-2 py-1 bg-white text-black rounded">USDT</button>
      <button className="px-2 py-1 bg-white text-black rounded">TON</button>
    </div>
  </div>
</div>

      {/* Wallet Address Input */}
      <div className="relative mb-4">
        <input
          type="text"
          className="w-full max-w-[40%] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
          placeholder="Wallet Address"
        />
        <button className=" left-2 top-2 text-gray-400 hover:text-gray-200">✖</button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-6">
        <button className="bg-[#0056b3] text-white px-4 py-2 rounded-lg hover:bg-[#004080] transition-colors text-sm">
          Claim
        </button>
        <button className="bg-[#28a745] text-white px-4 py-2 rounded-lg hover:bg-[#218838] transition-colors text-sm">
          Air Drop
        </button>
        <button className="bg-[#ffc107] text-white px-4 py-2 rounded-lg hover:bg-[#e0a800] transition-colors text-sm border border-[#ff4c00]">
          Free Gas Fee
        </button>
      </div>

      <div className="mt-4 text-right">
        <button className="text-[#4a90e2] flex items-center justify-end w-full text-sm">
          <span className="mr-1">Gas Settings</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default ClaimSection;
