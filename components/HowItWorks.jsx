import Image from 'next/image';
import React from 'react';
import Glass from "../public/glass.svg";
import RightArrow from "../public/right.svg";
import LeftArrow from "../public/left.svg";

function HowItWorks() {
  return (

    <section className="px-5 md:px-0 md:max-w-[85%] mx-auto w-full flex flex-col mb-[82px]">

      <h2 className="text-center text-primary text-[32px] leading-9 tracking-[.145em] uppercase font-black mb-16">How It Works</h2>

      <div className="flex flex-col lg:grid lg:grid-cols-[46.4%_53.6%] relative">
        
        <div className="absolute inset-0 w-full overflow-hidden z-[-1] h-full lg:hidden rounded-[12px]">                  
          <Image
            src={"/cinema-day-young-couple-with-popcorn-watching-interesting-movie-their-date-cinema1.png"}
            alt={"cinema-day-young-couple-with-popcorn-watching-interesting-movie-their-date-cinema1.png"}
            width={568}
            height={538}
            layout="fill" 
            quality={100}
            className="rounded-[10px] object-cover"
          />
        </div>

        <div className="w-full hidden lg:block rounded-[12px]">          
          <Image
            src={"/cinema-day-young-couple-with-popcorn-watching-interesting-movie-their-date-cinema1.png"}
            alt={"cinema-day-young-couple-with-popcorn-watching-interesting-movie-their-date-cinema1.png"}
            width={568}
            height={538}
            layout="responsive" 
            quality={100}
            className="rounded-[10px] object-cover"
          />
        </div>

        <div className="bg-white lg:ml-[-64px] z-20 rounded-[12px] backdrop-blur-[8px] lg:backdrop-blur-[24px] max-h-max my-auto flex flex-col bg-opacity-90 lg:bg-opacity-80 shadow-[0px_2px_6px_rgba(151, 172, 198,_0.25)] pl-[30px] pr-[25px] pt-10 pb-7 ">

          <div className="space-y-[44px] flex flex-col">

            <div className="flex flex-start space-x-[18px]">

              <div className="max-w-[46px]">
                <Glass/>
              </div>

              <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                A captive audience of theatregoers will be presented with a 30 second ad immediately prior to the start of the movie and post movie credits.
              </p>
              
            </div>

            <div className="flex flex-start space-x-[18px]">

              <div className="max-w-[46px]">
                <Glass/>
              </div>

              <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                Our 30 second dynamic Ad features the specific frame used in the movie, along with details on the Bullet Train collection.  The Ad is accompanied by a QR code that, when scanned, directs audience members to our dedicated Bullet Train + Police Eyewear landing page. 
              </p>
              
            </div>

            <div className="flex flex-start space-x-[18px]">

              <div className="max-w-[46px]">
                <Glass/>
              </div>

              <p className="text-sm md:text-base lg:text-lg !leading-[22px] tracking-[.145em]">
                Landing page includes details on the frame, styles and Police eyewear background, and a call to action to purchase the frames in-store.
              </p>
              
            </div>

          </div>

          <div className="flex mt-8 w-full items-center justify-end space-x-[30px]">

            <div className="bg-white cursor-pointer py-2 pl-[9px] pr-[4.5px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
              <LeftArrow/>
            </div>

            <div className="bg-white cursor-pointer py-2 pl-[6px] pr-[7.6px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
              <RightArrow/>
            </div>


          </div>

        </div>

      </div>




    </section>

  )
}

export default HowItWorks