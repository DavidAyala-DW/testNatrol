import React from 'react'
import Image from "next/image";
import HeroArrow from "../public/hero_arrow.svg";
import Button from './UI/Button';

function Hero() {
  return (

    <div className="w-full relative h-max">

      <div className="absolute inset-0 w-full h-full z-[-1]">        

        <Image
          src="/hero_banner.png"
          alt="alt"
          layout='fill'
          priority={true}
          quality={100}
          className="object-cover"
        />

      </div>

      <div className="absolute inset-0 w-full h-full bg-hero z-0"></div>

      <div className="flex flex-col">

        <div className="flex flex-col h-full w-[95%] md:w-[62.5%] max-w-[900px] mx-auto  z-20 pb-10">

          <div className="block -translate-y-5">
            <Image
              src="/hero_main.png"
              alt="alt"
              layout='responsive'
              width={900}
              height={688}
              priority={true}
              quality={100}
            />
          </div>

          <a
            className="w-max mb-4 md:mb-[30px] mx-auto "
            href=""
          >
            <Button
              color={"primary"}
              text={"JOIN THE PROMOTION"}
              size={"small"}
              type={"button"}
            />
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