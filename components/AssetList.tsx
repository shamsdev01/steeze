'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Asset {
  name: string;
  liquidity: string;
}

const assets: Asset[] = [
  { name: 'TON', liquidity: '35$' },
  { name: 'BNB', liquidity: '35$' },
  { name: 'ETH', liquidity: '35$' },
  { name: 'BTC', liquidity: '40$' },
  { name: 'USDT', liquidity: '30$' },
  { name: 'XRP', liquidity: '25$' },
  { name: 'ADA', liquidity: '20$' },
  { name: 'SOL', liquidity: '22$' },
];

const AssetList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const cardsToShow = { mobile: 1, desktop: 3 };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>   
      prevIndex + 1 >= assets.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? assets.length - 1 : prevIndex - 1
    );
  };

  const AssetCard = ({ asset }: { asset: Asset }) => (
    <div className="bg-white rounded-lg p-4 text-black w-full max-w-[300px]">
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
  );

  const CarouselControls = () => (
    <div className="flex justify-between items-center w-full max-w-[300px] mx-auto mt-4">
      <button onClick={prevSlide} className="text-white p-2">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="text-white p-2">
        <ChevronRight size={24} />
      </button>
    </div>
  );

  return (
    <div className="space-y-4 p-4">
      <div className="border-t border-gray-700 my-4"></div>
      <h2 className="text-xl text-white font-semibold text-center">Assets</h2>
      <div className="text-center">
        <span className="text-white font-light">Below are the assets Available:</span>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="flex justify-center">
          <AssetCard asset={assets[currentIndex]} />
        </div>
        <CarouselControls />
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <div className="flex justify-center space-x-4">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % assets.length;
            return <AssetCard key={assets[index].name} asset={assets[index]} />;
          })}
        </div>
        <CarouselControls />
      </div>
    </div>
  );
};

export default AssetList;