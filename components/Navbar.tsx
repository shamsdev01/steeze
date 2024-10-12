"use client"
import React, { useState} from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    "Home",
    "Services",
    "About Us",
    "Contact",
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        <motion.div 
          className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2"
          variants={itemVariants}
        >
          <div className="hidden mr-3 lg:flex nav__item">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="px-6 py-2 text-white bg-blue-600 rounded-md md:ml-5">
                Explore Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
                
        <Disclosure>
          {({ open }) => {
            setIsOpen(open); // Directly set the isOpen state when the Disclosure is open or closed

            return (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <motion.svg
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </motion.svg>
                </Disclosure.Button>

                <Disclosure.Panel static className="flex flex-wrap w-full my-5 lg:hidden">
                  <motion.div 
                    className="w-full"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {navigation.map((item, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Link href="/" className="block w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-red focus:text-white focus:bg-blue-500 dark:focus:bg-blue-500 focus:outline-none">
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link href="/" className="block w-full px-6 py-2 mt-3 text-center text-white bg-[#034D99] rounded-md lg:ml-5">         
                        Explore Now
                      </Link>
                    </motion.div>
                  </motion.div>
                </Disclosure.Panel>
              </>
            );
          }}
        </Disclosure>

        <motion.div 
          className="hidden text-center lg:flex lg:items-center"
          variants={itemVariants}
        >
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <motion.li 
                className="mr-3 nav__item" 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-red-800">
                  {menu}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.div>
  );
}
