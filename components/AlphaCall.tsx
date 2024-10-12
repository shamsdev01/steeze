import React from 'react';
import Container from './Container';

const AlphaCall = () => {
  return (
    <Container>
      <div className="flex items-center justify-center px-4 py-8 sm:py-12">
        <button className="
          w-full 
          max-w-[600px] 
          text-lg sm:text-xl md:text-2xl 
          font-bold 
          text-black 
          border-3 
          border-[#288232] 
          bg-gradient-to-r from-[#001F3F] to-[#F5F5F5] 
          py-3 sm:py-4 md:py-5 
          px-4 sm:px-6 
          rounded-lg 
          shadow-lg 
          transition-all 
          duration-300 
          ease-in-out 
          hover:shadow-xl 
          focus:outline-none 
          focus:ring-2 
          focus:ring-[#288232] 
          focus:ring-opacity-50
        ">
          Get next Alpha call, Crypto signal or Forex
        </button>
      </div>
    </Container>
  );
};

export default AlphaCall;