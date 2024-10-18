import React from 'react';
import Image from 'next/image';
import BarCode from '@/assets/images/barcode.png';

interface DepositSectionProps {
  walletBalance: number;
}

const DepositSection = ({ walletBalance }: DepositSectionProps) => {
  return (
    <div className="bg-[#001F3F] rounded-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Deposit</h2>
      <div className="lg:flex-row justify-between">
        <div className="flex justify-around lg:mb-0 gap-5 lg:mr-6">
          <div className="mb-4">
            <h3 className="text-lg mb-2">Wallet Balance</h3>
            <p className="text-3xl font-bold">${walletBalance.toLocaleString()}</p>
          </div>
          <Image src={BarCode} alt="QR Code" width={300} height={300} className="mb-4" />
        </div>
        <div className="flex flex-col justify-center ">
          <div>
            <select className="w-full max-w-[40%] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400">
              <option value="">Select Token</option>
              <option value="TON">TON</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
              <option value="USDT">USDT</option>
              <option value="NAMBA">NAMBA</option>
            </select>
            <div className="">
            <input 
              type="text" 
              placeholder="0x8d03AC93BCe2eA89DCD" 
              className="w-full max-w-[40%] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
            </div>
            
            <input 
              type="text" 
              placeholder="Enter Amount" 
              className="w-full max-w-[40%] p-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
            <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
              <span>Service Fee (0.5$)</span>
              <div className="flex gap-2">
                <button className="px-2 py-1 bg-white text-black rounded">USDT</button>
                <button className="px-2 py-1 bg-white text-black rounded">TON</button>
              </div>
            </div>
            <div className=" flex gap-8 justify-end  mt-10 sm: flex-wrap">
              <span className="">Want to deposit in Naira?<br></br>
              Click here</span>
              <button className=" w-40 bg-blue-500 text-white py-3 px-4 rounded">
              Support
            </button>
            </div>
          </div>
          <div className='flex gap-5 sm:mt-5'>
            <button className=" w-40 bg-blue-500 text-white py-3 px-4 rounded">
              Proceed
            </button>
            <button className="w-40 bg-gray-700 text-white py-3 px-4 rounded mt-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositSection;