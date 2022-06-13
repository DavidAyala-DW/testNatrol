import Image from 'next/image';
import React from 'react';
import Glass from "../public/glass.svg";
import RightArrow from "../public/right.svg";
import LeftArrow from "../public/left.svg";
import Girl from "../public/beautiful-young-woman-choosing-new-pair-spectacles-opticians-store-eyesight-correction-optics-ophtha.webp";

function AuthorizedRetailer() {
  return (
    
    <section className="px-5 md:px-0 md:max-w-[85%] mx-auto w-full flex flex-col mb-[82px]">

      <h2 className="text-center text-primary text-[32px] leading-9 tracking-[.145em] uppercase font-black mb-4">
        To become an authorized retailer
      </h2>

      <p className="mb-10 text-center mx-auto max-w-[594px] text-lg leading-[22px] tracking-[.145em]">
        Open our Police Eyewear collection with a pre-selected 24 pc order
      </p>

      <div className="flex flex-col lg:grid lg:grid-cols-[59.15%_41.85%] relative">
        
        <div className="block absolute inset-0 z-[-1] h-full lg:hidden w-full">          
          <Image
            src={Girl}
            alt={"beautiful-young-woman-choosing-new-pair-spectacles-opticians-store-eyesight-correction-optics-ophthalmology1.webp"}
            layout="fill" 
            quality={100}
            className="rounded-[10px] object-cover"
          />
        </div>

        <div className="hidden lg:block w-full">          
          <Image
            src={Girl}
            alt={"beautiful-young-woman-choosing-new-pair-spectacles-opticians-store-eyesight-correction-optics-ophthalmology1.webp"}
            width={724}
            height={401}
            layout="responsive" 
            quality={100}
            className="rounded-[10px]"
          />
        </div>

        <div className="bg-white lg:ml-[-37%] z-20 rounded-[12px] backdrop-blur-[8px]  lg:backdrop-blur-[24px] max-h-max my-auto flex flex-col bg-opacity-90 lg:bg-opacity-80 shadow-[0px_2px_6px_rgba(151, 172, 198,_0.25)] pl-[30px] pr-[25px] pt-10 pb-7 ">

          <div className="space-y-[33px] flex flex-col">

            <div className="flex flex-start space-x-[18px]">

              <div className="max-w-[46px]">
                <Glass/>
              </div>

              <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                12 pcs “Bullet Train” Opthalmic + Sun selection (multiple colours, 1 frame complimentary)
              </p>
              
            </div>

            <div className="flex flex-start space-x-[18px]">

              <div className="max-w-[46px]">
                <Glass/>
              </div>

              <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                12 pcs “Police Lifestyle” selection (our top sellers)
              </p>
              
            </div>

            <div className="flex flex-start space-x-[18px]">

              <div className="max-w-[46px]">
                <Glass/>
              </div>

              <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                30/60 payment terms, payable via credit card
              </p>
              
            </div>

            <div className="flex flex-start space-x-[18px]">

              <div className="max-w-[46px]">
                <Glass/>
              </div>

              <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                Point of Purchase (POP) materials, including a plaque and Police Eyewear branded counter card.
              </p>
              
            </div>

          </div>

        </div>

      </div>




    </section>

  )
}

export default AuthorizedRetailer