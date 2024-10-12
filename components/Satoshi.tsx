// import Container from "./Container"
import Image from "next/image"
import WaSatoshi from '@/assets/images/waSatoshi.png'
import SatoshiImg from '@/assets/images/Satoshi.png'

const Satoshi = () => {
  return (
    <div>
        {/* <Container> */}
       <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
    <div className="w-full sm:w-1/2 order-2 sm:order-2 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4">
     <span className="text-[#034D99]">Project </span> Analysis & Articles
      </h1>
      <div className="text-white text-1xl">
      <div className="flex gap-5 ">
      <li>Project Name: Satoshi App </li>  <Image
        src={SatoshiImg}
        alt="Crypto Steeze Logo"
        width={40}
        height={40}
        className="rounded-lg shadow-lg"
      />
      </div>
      <li>Handle Links: </li>
      </div>
      <span className="font-bold ">      Website : https://www.satoshiapp.xyz/</span>
      <span className="font-bold ">     Twitter : https://twitter.com/SatoshiAppXYZ</span>
      <span className=" font-bold">     Discord : https://discord.gg/HcaF5aa2XU6</span>
    </div>
    <div className="w-full sm:w-1/2 order-2 sm:order-1 flex items-center ">
      <Image
        src={WaSatoshi}
        alt="Crypto Steeze Logo"
        width={400}
        height={350}
        className="rounded-lg shadow-lg animate-pulse max-w-full h-auto"
      />
    </div>
  </div>
</div>
        {/* </Container> */}
    </div>
  )
}

export default Satoshi