import React from 'react'
import Image from 'next/image'
import WalletBalance from '@/components/WalletBalance'
import AssetList from '@/components/AssetList'
import DepositSection from '@/components/DepositSection'
import ClaimSection from '@/components/ClaimSection'
import Steeze from '@/assets/images/crypto-steeze_logo.png'

const page = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundColor: '#001F3F' }}>
    <div className="container mx-auto px-4 py-8">
    <Image src={Steeze} alt="Logo" width={50} height={50} />
      <header className=" items-center mb-8 text-center">
        <h1 className="text-2xl font-bold text-white text-center">Instant Gas Fees, Trade Urgency-Free</h1>
        <span className=" font-bold text-white text-center">Deposit ahead, buy at current rates. Fast, Low-fee transactions. No volatility worrries</span>
      </header>
      
      <main className="space-y-8">
        <WalletBalance balance={1000} />
        <AssetList />
        <DepositSection/>
        <ClaimSection />
      </main>
      
      <footer className="mt-8 text-center text-white">
        <a href="#" className="mx-2">Help</a>
        <a href="#" className="mx-2">Privacy</a>
        <a href="#" className="mx-2">Terms</a>
      </footer>
    </div>
  </div>
  )
}

export default page