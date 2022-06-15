import Image from 'next/image'
import React from 'react'
import Button from './UI/Button'
import Brands from "../public/brands_logos.svg"
import ContactImage from "../public/US_20x30_brian-Bottom-CTA1.webp";

function ContactUs() {
  return (

    <section className="py-[45px] px-[26px] w-full lg:px-[7.5%] bg-[#F7F7FB] flex flex-col">

      <h2 className="text-primary text-[32px] uppercase text-center leading-[38px] tracking-[.145em] mb-10 font-black">Contact us</h2>

      <div className="grid grid-cols-1 md2:grid-cols-[48.4%_51.6%] w-full">
        
        <div className="">

          <Image
            src={ContactImage}
            alt="contact.png"
            quality={100}
            layout="responsive"
          />
          
        </div>

        <div className="bg-white w-full h-max my-auto pt-5 lg:pt-[105px] pb-[25px]">

          <div className="flex flex-col items-center lg:items-start lg:px-[75px] mb-[120px]">

            <h3 className="text-primary text-center uppercase text-[32px] font-black tracking-[.145em] leading-[38px] mb-10">
              headline goes here
            </h3>

            <p className="max-w-[471px] text-center lg:text-left w-full text-lg font-normal leading-[30px] text-[#6F6C90] mb-10">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor
            </p>

            <Button
              text="Apply To Participate"
              color={"primary"}
              size="large"
              type="button"
              className="min-w-[220px] lg:min-w-[363px]"
            />

          </div>

          <div className="max-w-[95%] lg:max-w-[calc(100%-80px)] mx-auto">
            <Brands/>
          </div>

          



        </div>

      </div>



    </section>

  )
}

export default ContactUs