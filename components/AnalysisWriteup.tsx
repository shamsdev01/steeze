"use client";
import React from 'react'
import Container from './Container'
import { motion } from 'framer-motion'

const AnalysisWriteup = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <Container>
      <motion.div 
        className="px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="flex items-center justify-center font-bold text-2xl"
          variants={itemVariants}
        >
          Airdrop Guide
        </motion.h2>
        <motion.span 
          className="flex items-center"
          variants={itemVariants}
        >
          Earn Free Blum Points: Key Steps
        </motion.span>
        <motion.div 
          className="flex mr-10 items-center"
          variants={itemVariants}
        >
          <ul className="list-decimal">
            {[
              "Join the Blum Telegram group via :   https://t.me/blum/app?startapp=ref_jYmw9tYTvo",
              "Visit the mini-app every 8 hours to claim your accumulated Blum points",
              "Visit the mini-app daily to grow your streak and earn free Blum points with daily 7 drop game tickets",
              "Use your tickets to play the drop game ( tips on playing the drop game :- catch only flowers and avoid bombs )",
              "Complete community tasks like sharing content and inviting new members."
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants}>{item}</motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="gap-x-10" variants={itemVariants}>
          <div className="">
            <motion.span className="font-bold" variants={itemVariants}> Market Analysis</motion.span>
            <motion.p variants={itemVariants}>Blum is here to Simplify Crypto Trading</motion.p>
            <motion.span variants={itemVariants}>With Blum you can access a wide range of tokens from centralized and decentralized platforms in one place. Enjoy:</motion.span>
            <motion.div variants={itemVariants}>
              <ul>
                {["Easy derivatives trading", "Futures trading", "Seamless coin purchases"].map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>- {item}</motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.span className="font-bold text-1xl" variants={itemVariants}>Blum  decentralized exchange offers:</motion.span>
            <ul>
              {[
                "Flexibility: Trade without limitations",
                "Ease of use: Navigate with simplicity",
                "Security: Control your funds with MPC wallet or connect your existing wallet"
              ].map((item, index) => (
                <motion.li className="text-1xl" key={index} variants={itemVariants}>- {item}</motion.li>
              ))}
            </ul>
            <motion.span className="text-1xl" variants={itemVariants}>Trade anywhere, anytime with our mobile and Telegram mini apps.Team</motion.span>
            <ul>
              {[
                "Gleb Kostarev ( CEO & Co-founder )",
                "Vladimir Smerkis ( co - founder of Blum also an ex-head of binance CIS / Central Asia )"
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants}>- {item}</motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t-8 border-[#302d2d3b] h-4xl lg:grid-cols-5"
        variants={itemVariants}
      ></motion.div>
    </Container>
  )
}

export default AnalysisWriteup