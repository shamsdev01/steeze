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
        className="px-4 sm:px-6 md:px-8 lg:px-20 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-center font-bold text-2xl md:text-3xl mb-4"
          variants={itemVariants}
        >
          Airdrop Guide
        </motion.h2>
        <motion.span 
          className="block text-center text-lg md:text-xl mb-6"
          variants={itemVariants}
        >
          Earn Free Blum Points: Key Steps
        </motion.span>
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <ul className="list-decimal pl-6 space-y-2">
            {[
              "Join the Blum Telegram group via: https://t.me/blum/app?startapp=ref_jYmw9tYTvo",
              "Visit the mini-app every 8 hours to claim your accumulated Blum points",
              "Visit the mini-app daily to grow your streak and earn free Blum points with daily 7 drop game tickets",
              "Use your tickets to play the drop game (tips: catch only flowers and avoid bombs)",
              "Complete community tasks like sharing content and inviting new members."
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants} className="text-sm md:text-base">{item}</motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.span className="font-bold text-xl block mb-2" variants={itemVariants}>Market Analysis</motion.span>
          <motion.p variants={itemVariants} className="mb-4">Blum is here to Simplify Crypto Trading</motion.p>
          <motion.span variants={itemVariants} className="block mb-2">With Blum you can access a wide range of tokens from centralized and decentralized platforms in one place. Enjoy:</motion.span>
          <motion.ul className="list-disc pl-6 mb-4 space-y-1">
            {["Easy derivatives trading", "Futures trading", "Seamless coin purchases"].map((item, index) => (
              <motion.li key={index} variants={itemVariants} className="text-sm md:text-base">{item}</motion.li>
            ))}
          </motion.ul>
          <motion.span className="font-bold text-lg block mb-2" variants={itemVariants}>Blum decentralized exchange offers:</motion.span>
          <motion.ul className="list-disc pl-6 mb-4 space-y-1">
            {[
              "Flexibility: Trade without limitations",
              "Ease of use: Navigate with simplicity",
              "Security: Control your funds with MPC wallet or connect your existing wallet"
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants} className="text-sm md:text-base">{item}</motion.li>
            ))}
          </motion.ul>
          <motion.span className="block mb-2" variants={itemVariants}>Trade anywhere, anytime with our mobile and Telegram mini apps.</motion.span>
          <motion.span className="font-bold text-lg block mb-2" variants={itemVariants}>Team</motion.span>
          <motion.ul className="list-disc pl-6 space-y-1">
            {[
              "Gleb Kostarev (CEO & Co-founder)",
              "Vladimir Smerkis (Co-founder of Blum, ex-head of Binance CIS / Central Asia)"
            ].map((item, index) => (
              <motion.li key={index} variants={itemVariants} className="text-sm md:text-base">{item}</motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
      <motion.div 
        className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-8 border-t-2 border-gray-200"
        variants={itemVariants}
      ></motion.div>
    </Container>
  )
}

export default AnalysisWriteup