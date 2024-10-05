
import React from 'react'
import Container from './Container'

const SatoshiAnalysis = () => {
  return (
    <Container>
    <div className=" items-center justify-center space-y-4">
        <div className="p-20 space-y-2">
        <h2 className="flex items-center justify-center font-bold text-2xl">Market Aalysis</h2>
        <span className=" flex items-center justify-center">Satoshi App is a premier airdrop platform, serving over 16 million users worldwide and offering the opportunity to earn free </span> 
        <span className='flex items-center justify-center'>tokens daily. Satoshi app mission is to enhance crypto enthusiat Web 3 experience by making it safer, smoother and more convenient.</span>
        <p className="flex items-center justify-center">Satoshi app serve as a bridge, linking cutting edge blockchain projects with a worldwide audience, providing users with a simple way to discover 
        and receive tokens.</p>
        </div>
        <h2 className="flex items-center justify-center text-2xl font-bold">Airdrop Guide</h2>
       <div className="space-y-2">
       <span className="font-bold">How to Get on-board</span>
            <ul className="list-decimal">
                <li>Register and download Satohi app <span className='text-blue-800 '>https://invite.satoshiapp.xyz/21g2c</span></li>
                <li> Complete your verification and initiate your mining by participating on ongoing airdrops</li>
                <li>Use gift card [ once ] to enjoy new user hash rate</li>
                <li>Exchange hash cards with friends / other miners to increase your hash rate</li>
                <li>Satoshi app uses rounds [ airdrop tokens are distributed to participants every hour ] 1 round = 1 hour</li>
                <li>Mining will temporary stop after twenty five unclaimed rounds</li>
            </ul>
       </div>
    </div>
    <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t-8 border-[#302d2d3b] h-4xl lg:grid-cols-5"></div>
    </Container>
  )
}

export default SatoshiAnalysis