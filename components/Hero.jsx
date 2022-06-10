import React from 'react'
import Image from "next/image";

function Hero() {
  return (

    <div className="w-full relative">

      <div className="hidden sm:block">        
        <Image
          src="/hero_eredita.webp"
          alt="alt"
          layout='responsive'
          width={1024}
          height={410}
          priority={true}
          quality={100}
        />
      </div>

      <div className="block sm:hidden">
        <Image
          src="/hero_eredita_mobile.webp"
          alt="alt"
          layout='responsive'
          width={1024}
          height={1024}
          priority={true}
          quality={100}
        />
      </div>

      <div className="absolute left-1 right-1 bottom-2 sm:bottom-0 sm:inset-0 sm:left-[100px] flex flex-col justify-end sm:justify-center">

        <div className="flex flex-col h-[fit-content] bg-[rgba(0,0,0,.5)] px-2.5 py-[30px] sm:px-0 sm:py-0 sm:bg-none sm:bg-transparent w-full sm:w-[35%]">

          <p className="text-xs text-center sm:text-left sm:text-[14px] text-white font-bold uppercase tracking-[.2em]">
            A new era of luxury:
          </p>

          <h2 className="text-center sm:text-left text-[22px] sm:text-[40px] mt-2.5 mb-6 text-white font-bold capitalize tracking-[0] leading-[normal]">
            Philipp Plein
          </h2>

          <p className="px-7 mx-auto sm:mx-0 max-w-max py-[14px] text-white text-[13px] uppercase outline-white leading-[normal] outline outline-[1.5px] text-center tracking-[.2em] font-normal m-2">
            Explore Now
          </p>

        </div>

      </div>

    </div>

  )
}

export default Hero