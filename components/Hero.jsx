import React from 'react'
import Image from "next/image";
import HeroArrow from "../public/hero_arrow.svg";
import Button from './UI/Button';
import HeroBanner from "../public/hero_banner.webp"
import HeroMain from "../public/hero_main.webp";

function Hero() {
  return (

    <div className="w-full relative h-max">

      <div className="absolute inset-0 w-full h-full z-[-1]">        

        <Image
          src={HeroBanner}
          alt="alt"
          layout='fill'
          priority={true}
          quality={80}
          className="object-cover object-[68%] lg:object-center"
        />

      </div>

      <div className="absolute inset-0 w-full h-full bg-hero z-0"></div>

      <div className="flex flex-col pt-[210px] pb-[53px] lg:py-0">

        <div className="flex flex-col h-full w-[95%] md:w-[62.5%] lg:max-w-[600px] 3xl:max-w-[900px] mx-auto z-20 lg:pb-10">

          <div className="block lg:-translate-y-5">
            <Image
              src={HeroMain}
              alt="hero_main.webp"
              layout='responsive'
              priority={true}
              quality={100}
            />
          </div>

          <div className="flex flex-col lg:-translate-y-10">
            <a
              className="w-max mb-4 md:mb-[25px] mx-auto "
              href=""
            >
              <Button
                color={"primary"}
                text={"JOIN THE PROMOTION"}
                size={"small"}
                type={"button"}
              />
            </a>

            <h4 className="max-w-[220px] mb-2 md:mb-3 text-primary mx-auto text-lg leading-[22px] text-center font-bold uppercase tracking-[.145em]">
              Exclusive Opportunity
            </h4>

            <div className="flex flex-col justify-center items-center h-[90px] w-[90px] mx-auto rounded-full border-2 border-primary border-dashed">
              <HeroArrow/>
            </div>  
          </div>

        </div>

      </div>    

    </div>

  )
}

export default Hero