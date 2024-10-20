'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import BarCode from '@/assets/images/barcode.png';

interface DepositSectionProps {
  walletBalance: number;
}

const DepositSection = ({ walletBalance }: DepositSectionProps) => {
  const [walletAddress] = useState('0x8d03AC93BCe2eA89DCD');
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="bg-[#001F3F] rounded-lg p-6 text-white relative">
      {showNotification && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md transition-opacity duration-300">
          Copied!
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4 text-center">Deposit</h2>
      <div className="lg:space-x-10">
        {/* Left side: Wallet Balance and QR Code */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-around lg:mb-0 gap-5 lg:mr-6">
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <h3 className="text-lg mb-2">Wallet Balance</h3>
            <p className="text-3xl font-bold">${walletBalance.toLocaleString()}</p>
          </div>
          <Image src={BarCode} alt="QR Code" width={300} height={300} className="w-full max-w-[200px] lg:max-w-[300px] object-contain" />
        </div>

        {/* Right side: Form elements */}
        <div className="flex flex-col justify-center w-full lg:w-auto">
          <div className="flex flex-col items-center lg:items-start">
            <select className="w-full lg:max-w-[400px] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400">
              <option value="">Select Token</option>
              <option value="TON">TON</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
              <option value="USDT">USDT</option>
              <option value="NAMBA">NAMBA</option>
            </select>

            <div className="relative w-full lg:max-w-[400px] mt-4">
              <input
                type="text"
                readOnly
                value={walletAddress}
                className="w-full p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
              />
              <button
                onClick={copyToClipboard}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400"
              >
                <Copy size={20} />
              </button>
            </div>

            <input
              type="text"
              required
              className="w-full lg:max-w-[400px] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 mt-4"
              placeholder="Enter Amount"
            />

            <div className="w-full lg:max-w-[400px] flex justify-between items-center text-gray-400 text-sm mt-4">
              <span>Service Fee (0.5$)</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 bg-white text-black rounded">USDT</button>
                <button className="px-2 py-1 bg-white text-black rounded">TON</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-6">
              <span>
                Want to deposit in Naira?<br />
              </span>
              <button className="w-full sm:w-40 bg-blue-500 text-white py-3 px-4 rounded">
                Support
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-6">
            <button className="w-full sm:w-40 bg-blue-500 text-white py-3 px-4 rounded">
              Proceed
            </button>
            <button className="w-full sm:w-40 bg-gray-700 text-white py-3 px-4 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositSection;
