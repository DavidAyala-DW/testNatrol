import React from 'react'
import Image from "next/image";
import HeroArrow from "../public/hero_arrow.svg";

function Hero() {
  return (

    <div className="w-full relative">

      <div className="hidden xl:block">        

        <Image
          src="/hero_banner.png"
          alt="alt"
          layout='responsive'
          width={1440}
          height={925}
          priority={true}
          quality={100}
        />

      </div>

      <div className="block xl:hidden h-[calc(100vw*1.3)] max-h-[800px] md:max-h-[700px] lg:max-h-[800px] overflow-hidden">        

        <Image
          src="/hero_banner.png"
          alt="alt"
          layout='responsive'
          width={1440}
          height={1900}
          priority={true}
          quality={100}
        />

      </div>

      <div className="absolute inset-0 w-full h-full bg-hero"></div>

      <div className="absolute inset-0 md:-top-5">

        <div className="w-full flex flex-col h-full max-w-[95%] md:max-w-[62.5%] mx-auto">

          <Image
            src="/hero_main.png"
            alt="alt"
            layout='responsive'
            width={900}
            height={688}
            priority={true}
            quality={100}
          />

          <a className="w-max mb-4 md:mb-[30px] mx-auto text-[13px] leading-[15.6px] font-bold border border-primary text-primary text-center px-3 py-2.5 uppercase tracking-[.145em]" href="">
            JOINTHE PROMOTION
          </a>

          <h4 className="max-w-[220px] mb-2 md:mb-5 text-primary mx-auto text-lg leading-[22px] text-center font-bold uppercase tracking-[.145em]">
            Exclusive Opportunity
          </h4>

          <div className="flex flex-col justify-center items-center h-[90px] w-[90px] mx-auto rounded-full border-2 border-primary border-dashed">
            <HeroArrow/>
          </div>  

        </div>

      </div>    

    </div>

  )
}

export default Hero