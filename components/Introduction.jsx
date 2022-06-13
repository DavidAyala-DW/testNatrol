import React from 'react'
import Image from "next/image"
import Button from './UI/Button'

function Introduction() {

  return (

    <section className="rounded-[10px] lg:mt-[-45px] shadow-introduction pt-[45px] pb-[51px] w-full sm:px-[25px] md:px-[50px] lg:px-0 lg:max-w-[85%] mx-auto bg-white z-[30]">

      <h2 className="text-primary font-bold text-[32px] leading-[38px] text-center tracking-[0.145em] uppercase mb-20">
        Introducing
      </h2>

      <div className="flex items-start md:items-center lg:items-start space-y-24 md:space-y-0 flex-col px-5 md:flex-row w-full lg:pl-[72px] lg:pr-5">

        <div className="max-w-max w-full flex flex-col">

          <h3 className="text-lg leading-[22px] font-bold uppercase mb-5 tracking-[.145em]">
            police lifestyle
          </h3>

          <h3 className=" text-[40px] md:text-[50px] lg:text-[60px] text-primary font-starduster leading-[55px] tracking-[-.1em] uppercase mb-5">
            vple037
          </h3>

          <p className="text-lg leading-[22px] max-w-[300px] lg:max-w-[376px] mb-8">
            Aside from being featured and worn by top A-Listers in the upcoming hit “Bullet Train”, these frames come in a wide variety of 6 sun and 6 opthalmic SKU’s, offering huge sales opportunities for optical shops lookig for more growth & exposure in the market, all done for you!
          </p>

          <a className="block" href="">

            <Button
              color="primary"
              text="Join the promotion"
              size="small"
              type="button"
            />

          </a>

        </div>

        <div className="block w-full h-full relative">

          <Image
            src={"/590332_1644363131835_600x3001.png"}
            alt="590332_1644363131835_600x3001.png"
            layout="responsive"
            width={778}
            height={372}
            className="object-cover"
          />

          <div className="absolute bottom-0 right-0 w-full max-w-[17.8%]">
            <Image
              src={"/barcode.png"}
              alt="barcode.png"
              layout="responsive"
              width={135}
              height={160}
              className="object-cover"
            />
          </div>

          <div className="absolute -top-8 left-[32%] rounded-full flex flex-col items-center justify-center bg-[#E9EAF0] shadow-[0px_2px_6px_#E0E3F8] h-full w-full max-h-[55.2%] max-w-[26.4%] lg:max-h-[47.5%] lg:max-w-[22.7%]">

            <p className="font-bold text-[10px] xl:text-base leading-[19px] tracking-[.145em] text-center uppercase">Featured in</p>

            <div className="block w-full">
              <Image
                src={"/BulletTrain-Header-Sample22.png"}
                alt="BulletTrain-Header-Sample22.png"
                layout="responsive"
                width={159}
                height={59}
                className="object-cover"
              />              
            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Introduction