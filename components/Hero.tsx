"use client";
import React from 'react'
import Container from './Container'
import Steeze from '@/assets/images/crypto-steeze_logo.png'
import Image from 'next/image'
// import { useEffect,useState } from 'react'

const Hero = () => {
  // const [visits, setVisits] = useState<number>(0);
  // const [signUps, setSignUps] = useState<number>(0);

  // useEffect(() => {
  //   // Fetch visit and sign-up stats from the API
  //   fetch('/api/get-stats')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setVisits(data.visits);     // Update visits count
  //       setSignUps(data.signUps);   // Update sign-ups count
  //     })
  //     .catch((error) => console.error('Error fetching stats:', error));
  // }, []);

  return (
    <>
    <Container className="flex flex-wrap ">
      <div className="flex items-center w-full lg:w-1/2" >
        <div className="max-w-2xl mb-8">
          <h1 className="text-3xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Unlock the <span className='text-blue-900'>Power</span> Of Crypto
          </h1>
          <span className="font-bold leding-snug trackig-tight  mt-2 lg:leading-tight  xl:leading-tight ">We help you make informed choices in Cryptocurrency</span>
          <div className="flex flex-col items-start space-y-3  mt-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="/"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-[#034D99] rounded-md ">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <Image
           src={Steeze}
            width={300}
            height={300}
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            // placeholder="blur"
          />
        </div>
      </div>
    </Container>
    <Container>
      <div className="flex flex-col justify-center mb-9">
        <div className="text-xl text-center text-white dark:text-white">
          Metrics:
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-center gap-2 mt-5 md:justify-between">
          <div className="text-white dark:text-gray-400 text-2xl md:text-xl">
            Visitors : 100
            {/* Visitors : {visits} */}
          </div>
          <div className="text-white dark:text-gray-400 text-2xl md:text-xl">Visitors : 100
            {/* Community: {signUps} */}
          </div>
          <div className="text-white dark:text-gray-400 text-2xl md:text-xl">Visitors : 100
            {/* Projects:{visits} */}
          </div>
        </div>
      </div>
    </Container> 
  </>
  )
}

export default Hero