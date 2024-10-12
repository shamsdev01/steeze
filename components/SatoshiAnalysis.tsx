"use client";
import React from 'react';
import Container from './Container';
import { motion } from 'framer-motion';

const SatoshiAnalysis = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Container>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-center font-bold text-2xl md:text-3xl mb-6"
          variants={itemVariants}
        >
          Market Analysis
        </motion.h2>
        <motion.div 
          className="space-y-4 mb-8 text-center"
          variants={itemVariants}
        >
          <p>
            Satoshi App is a premier airdrop platform, serving over 16 million users worldwide and offering the opportunity to earn free tokens daily.
          </p>
          <p>
            Satoshi app's mission is to enhance crypto enthusiasts' Web 3 experience by making it safer, smoother and more convenient.
          </p>
          <p>
            Satoshi app serves as a bridge, linking cutting-edge blockchain projects with a worldwide audience, providing users with a simple way to discover and receive tokens.
          </p>
        </motion.div>

        <motion.h2 
          className="text-center font-bold text-2xl md:text-3xl mb-6"
          variants={itemVariants}
        >
          Airdrop Guide
        </motion.h2>
        <motion.div 
          className="space-y-4"
          variants={itemVariants}
        >
          <motion.h3 
            className="font-bold text-xl mb-2"
            variants={itemVariants}
          >
            How to Get on-board
          </motion.h3>
          <motion.ol 
            className="list-decimal pl-6 space-y-2"
            variants={itemVariants}
          >
            <li>Register and download Satoshi app <a href="https://invite.satoshiapp.xyz/21g2c" className="text-blue-600 hover:underline">https://invite.satoshiapp.xyz/21g2c</a></li>
            <li>Complete your verification and initiate your mining by participating in ongoing airdrops</li>
            <li>Use gift card [once] to enjoy new user hash rate</li>
            <li>Exchange hash cards with friends / other miners to increase your hash rate</li>
            <li>Satoshi app uses rounds [airdrop tokens are distributed to participants every hour] 1 round = 1 hour</li>
            <li>Mining will temporarily stop after twenty-five unclaimed rounds</li>
          </motion.ol>
        </motion.div>
      </motion.div>
      <motion.div 
        className="max-w-screen-xl mx-auto mt-12 pt-8 border-t-2 border-gray-200"
        variants={itemVariants}
      ></motion.div>
    </Container>
  );
};

export default SatoshiAnalysis; 