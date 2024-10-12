"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ServiceItem {
  title: string;
  subtitle: string;
  items: string[];
}

const ServiceCard = ({ title, subtitle, items }: ServiceItem) => (
  <motion.div 
    className="flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-bold mb-1 text-white flex items-center justify-center">{title}</h3>
    <p className="text-sm mb-2 text-white flex items-center justify-center">{subtitle}</p>
    <motion.div 
      className="bg-gradient-to-b from-[#001F3F] to-blue-600 rounded-xl p-4 text-white h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="text-sm text-black"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.li>
        ))}
      </ul> 
    </motion.div>
  </motion.div>
);

const bounceAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

const Services = () => {
  const router = useRouter();
  
  const handleBuyGasFeeClick = () => {
    router.push('/signup');  // Replace '/signup' with the actual path to your signup page
  };
  const services: ServiceItem[] = [
    {
      title: "Holder",
      subtitle: "Where crypto meets confidence",
      items: ["Mining App", "Telegram Airdrop", "Testnet Airdrops", "Success Rate"]
    },
    {
      title: "Flipper",
      subtitle: "Flip your way to crypto success",
      items: ["Minning apps", "Airdrop guide","Low gas fee tricks", "Honeypot alert", "Telegram airdrop","ICO/IDO calls","Test net airdrops","Meme coins calls","Market analysis","Success rate"]
    },
    {
      title: "Satoshi",
      subtitle: "Unlock elite crypto insights with satoshi",
      items: ["Mining apps", "Airdrop guide", "Honeypot alert", "Low gas fee tricks", "ICO/IDO calls", "Telegram airdrops", "Test net airdrops", "Meme coins call", "NFTs calls", "Retroactive airdrops", "Market analysis", "T.A mentorship", "Crypto anf forex trading signals", "Successn rate"]
    }
  ];

  return (
    <motion.div 
      className="bg-gradient-to-b from-[#034D99] via-[#034D99] to-[#F5F5F5] rounded-[50px] p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-2xl font-bold text-white text-center mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Our Services
      </motion.h2>
      <motion.p 
        className="text-center font-bold mb-6 text-white"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Trade with us
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <motion.div 
        className="flex flex-col sm:flex-row justify-around space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-full sm:w-auto">
          <motion.button 
            className="border-[3px] border-[#288232] bg-gradient-to-r from-[#001F3F] to-[#F5F5F5] flex w-full sm:w-[300px] lg:w-[400px] py-[15px] px-4 justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Free Mode
          </motion.button>
          <span className="flex items-center text-black justify-center mt-2 text-sm sm:text-base">Can only check<br></br>two projects per week</span>
        </div>
        <div className="w-full sm:w-auto">
          <motion.button 
            className="border-[3px] border-[#288232] bg-gradient-to-r from-[#001F3F] to-[#F5F5F5] flex w-full sm:w-[300px] lg:w-[400px] py-[15px] px-4 justify-center items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={bounceAnimation}
            onClick={handleBuyGasFeeClick}
          >
            Buy Gas Fee
          </motion.button>
          <span className="flex items-center text-black justify-center text-sm sm:text-base">Never run out of gas fee <br></br>  deposit ahead and buy at <br></br> current market rate </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;