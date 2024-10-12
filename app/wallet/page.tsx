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
      <header className="flex justify-between items-center mb-8">
        <Image src={Steeze} alt="Logo" width={50} height={50} />
        <h1 className="text-2xl font-bold text-white">Instant Gas Fees, Trade Urgency-Free</h1>
      </header>
      
      <main className="space-y-8">
        <WalletBalance balance={1000} />
        <AssetList />
        <DepositSection walletBalance={10000} />
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