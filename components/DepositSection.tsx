import React from 'react';
import Image from 'next/image';
import BarCode from '@/assets/images/barcode.png';

interface DepositSectionProps {
  walletBalance: number;
}

const DepositSection = ({ walletBalance }: DepositSectionProps) => {
  return (
    <div className="bg-[#001F3F] rounded-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Deposit</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0 lg:mr-6">
          <div className="mb-4">
            <h3 className="text-lg mb-2">Wallet Balance</h3>
            <p className="text-3xl font-bold">${walletBalance.toLocaleString()}</p>
          </div>
          <Image src={BarCode} alt="QR Code" width={200} height={200} className="mb-4" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <select className="w-full bg-gray-700 text-white p-3 rounded mb-4">
              <option value="">Select Token</option>
              <option value="TON">TON</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
              <option value="USDT">USDT</option>
              <option value="NAMBA">NAMBA</option>
            </select>
            <input 
              type="text" 
              placeholder="0x8d03AC93BCe2eA89DCD" 
              className="w-full bg-gray-700 text-white p-3 rounded mb-4"
            />
            <input 
              type="text" 
              placeholder="Enter Amount" 
              className="w-full bg-gray-700 text-white p-3 rounded mb-4"
            />
          </div>
          <div>
            <button className="w-full bg-blue-500 text-white py-3 px-4 rounded">
              Proceed
            </button>
            <button className="w-full bg-gray-700 text-white py-3 px-4 rounded mt-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositSection;