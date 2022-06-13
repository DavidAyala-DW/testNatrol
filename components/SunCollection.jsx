import React, {useState} from 'react'
import Image from "next/image"
import {Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import Men from "../public/portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion.webp";

import Sun1 from "../public/sun1.png";
import Sun2 from "../public/sun2.png";
import Sun3 from "../public/sun3.png";
import Sun4 from "../public/sun4.png";
import Sun5 from "../public/sun5.png";
import Sun6 from "../public/sun6.png";

import RightArrow from "../public/right.svg";
import LeftArrow from "../public/left.svg";

const products = [ 

  {
    url: Sun1,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun2,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun3,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun4,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun5,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun6,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun6,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun5,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun4,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun3,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun2,
    title:"Vivamus Sit Smet",
    price: 780.00
  },
  {
    url: Sun1,
    title:"Vivamus Sit Smet",
    price: 780.00
  }

]



function SunCollection() {
  

  const [activeProduct, setActiveProduct] = useState(products[0]);

  function handleClickProduct(index){
    setActiveProduct(products[index]);
  }


  return (

    <section className="px-5 select-none md:px-0 md:max-w-[85%] mx-auto w-full flex flex-col mb-[70px] mt-[54px]">

      <h2 className="uppercase text-left text-2xl font-starduster italic leading-[23px] tracking-[.145em] text-primary mb-[35px]">
        sun
      </h2>

      <div className="grid grid-cols-2 gap-x-[60px] relative">

        <div className="block relative">

          <Image
            src={Men}
            layout="responsive"
            alt="portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion.webp"
          />

          <div className="bg-white rounded-[10px] bottom-[20px] left-[125px] absolute max-w-[333px] max-h-[129px] overflow-y-hidden h-max w-full flex space-x-2.5 overflow-hidden pt-[30px] pb-[30px]">

            <div className="block relative w-full transform -translate-y-[55px] max-w-[150px] h-full">

              <Image
                src={activeProduct.url}
                alt={activeProduct.title}
                layout="responsive"
                quality={100}
              />

            </div>    

            <div className="flex flex-col justify-between items-center">
              <p className="leading-12 text-center capitalize">{activeProduct.title}</p>        
              <p className="font-bold">{`$${Number(activeProduct.price).toFixed(2)}`}</p>        
            </div>


          </div>

        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next"
          }}
          className="grid w-full h-full"
        >

          <SwiperSlide className="w-full flex flex-col h-full">

            <div className="grid grid-cols-3 gap-x-5 select-none gap-y-10 w-full h-full">

              { products.map( (product,index) => {
                if(index > 5) return;
                return (
                  
                  <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] relative">
                    <Image
                      src={product.url}
                      alt={product.url}
                      layout="fill"
                      quality={100}
                    />
                  </div>

                )

              } )}

            </div>

          </SwiperSlide>

          <SwiperSlide className="w-full flex flex-col h-full">

            <div className="grid grid-cols-3 gap-x-5 select-none gap-y-10 w-full h-full">

              { products.map( (product,index) => {
                
                if(index <= 5) return;
                return (
                  
                  <div key={index} onClick={() => handleClickProduct(index) } className="h-full cursor-pointer w-full bg-white border rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)] relative">
                    <Image
                      src={product.url}
                      alt={product.url}
                      layout="fill"
                      quality={100}
                    />
                  </div>

                )

              } )}

            </div>

          </SwiperSlide>

        </Swiper>

        <div className="flex max-w-max w-full items-center absolute -top-12 right-0 space-x-[30px]">

          <div className="bg-white swiper-prev cursor-pointer py-2 pl-[9px] pr-[4.5px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <LeftArrow/>
          </div>

          <div className="bg-white swiper-next cursor-pointer py-2 pl-[6px] pr-[7.6px] shadow-[0px_0px_35px_-1.42857px_rgba(0,_0,_0,_0.19)]">
            <RightArrow/>
          </div>

        </div>

      </div>

    </section>
    
  )
}

export default SunCollection