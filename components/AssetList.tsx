import React from 'react';

interface Asset {
  name: string;
  liquidity: string;
}

const assets: Asset[] = [
  { name: 'TON', liquidity: '35$' },
  { name: 'BNB', liquidity: '35$' },
  { name: 'ETH', liquidity: '35$' },
];

const AssetList = () => {
  return (
    <div className="space-y-4">
      <div className="border-t border-gray-700 my-4"></div>
      <h2 className="text-xl text-white font-semibold text-center">Assets</h2>
      <div className="text-center">
        <span className="text-white font-light">Below are the assets Available:</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {assets.map((asset) => (
          <div key={asset.name} className="bg-white rounded-lg p-4 text-black">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{asset.name}</span>
              <span className="text-sm">▼</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span>Liquidity: {asset.liquidity}</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded transition-colors">
                Deposit
              </button>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded transition-colors">
                Claim
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetList;