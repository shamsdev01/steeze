import React from 'react';

const claimableAssets = [
  { name: 'TON', amount: 1000 },
  { name: 'BNB', amount: 2000 },
  { name: 'ETH', amount: 50 },
];

const ClaimSection: React.FC = () => {
  return (
    <div className="bg-[#001F3F] rounded-lg p-4 text-white">
      <h2 className="text-xl mb-4">Claim</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {claimableAssets.map((asset) => (
          <div key={asset.name} className="bg-gray-700 rounded-lg p-2 text-center">
            <p>{asset.name}</p>
            <p className="font-bold">${asset.amount}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded m-2">Claim</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded m-2">Air Drop</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded m-2">Free Gas Fee</button>
      </div>
    </div>
  );
};

export default ClaimSection