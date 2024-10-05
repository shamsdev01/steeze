"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MobileBitcoin from '@/assets/images/mobileBitcoin.png'
import Group21 from '@/assets/images/Group 21.png'
import Blum from '@/assets/images/blum.png'

const Analysis = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <motion.div 
      className="container mx-auto px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
        <motion.div 
          className="w-full sm:w-1/2 order-2 sm:order-2 flex flex-col justify-center"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="text-[#034D99]">Project</span> Analysis & Articles
          </motion.h1>
          <motion.div 
            className="text-white text-1xl p-4"
            variants={itemVariants}
          >
            <div className="flex gap-5 ">
              <li>Project Name: Blum </li>  
              <Image
                src={Blum}
                alt="Crypto Steeze Logo"
                width={40}
                height={40}
                className="rounded-lg shadow-lg"
              />
            </div>
            <li>Success rate: 80%</li>
          </motion.div>
          <motion.span className="font-bold" variants={itemVariants}>Instagram :</motion.span>
          <motion.span className="font-bold" variants={itemVariants}>Facebook :</motion.span>
          <motion.span className="font-bold" variants={itemVariants}>Twitter :</motion.span>
          <motion.div className="flex" variants={itemVariants}>
            <Image
              src={Group21}
              alt="Crypto Steeze Logo"
              width={90}
              height={90}
              className="rounded-lg shadow-lg"
            />
            <h4 className=" font-bold">Summary:</h4>
            <h3>This project as 80% success rate is a good one</h3>
          </motion.div>
          <motion.h3 className=" font-bold mt-2" variants={itemVariants}>Note:</motion.h3>
          <motion.span className="" variants={itemVariants}>Come back for new development from the project</motion.span>
        </motion.div>
        <motion.div 
          className="w-full sm:w-1/2 order-2 sm:order-1 flex items-center"
          variants={itemVariants}
        >
          <Image
            src={MobileBitcoin}
            alt="Crypto Steeze Logo"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Analysis