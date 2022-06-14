import React from 'react'
import Facebook from "../public/facebook.svg";
import Linkedin from "../public/linkedin.svg";
import Instagram from "../public/instagram.svg";

function Footer() {
  return (

    <footer className="bg-[#212D69] px-6 sm:px-[50px] xl:px-20 pt-[172px] pb-[132px] text-[#e9ebf2]">

      <div className="flex flex-col">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">

          <div className="flex flex-col">

            <h3 className="mb-[30px] uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Contact
            </h3>

            <div className="flex flex-col text-[15px] leading-[1.65] font-normal space-y-[15px]">

              <p className="font-bold">Eredità Eyewear Group Inc.</p>
              <p>1920 Clements Road</p>
              <p>Pickering, ON</p>
              <p>L1W 3V6</p>
              <p>Canada</p>

            </div>

            <div className="flex mt-[60px] space-y-[10px] flex-col mb-5 text-[15px] leading-[1.65] font-normal">
              
              <p>Support:</p>
              <p>sales@ereditaeyewear.com</p>
              <p>orders@ereditaeyewear.com</p>
              <p>1-855-793-EYES </p>

            </div>

            <div className="flex items-center space-x-7 opacity-50">

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full">
                <Facebook/>
              </div>

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full">
                <Linkedin/>
              </div>

              <div className="flex fle-col h-[30px] w-[30px] justify-center items-center rounded-full">
                <Instagram/>
              </div>

            </div>

          </div>

          <div className="flex flex-col">

            <h3 className="mb-[30px] uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Quick links
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal space-y-[15px]">

              <p>Shop All Frames</p>
              <p>Search</p>
              <p>FAQ</p>
              <p>Our Heritage</p>
              <p>Thoughts & Insights</p>
              <p>Contact</p>
              <p>Book An Appointment</p>

            </div>

          </div>

          <div className="flex flex-col">

            <h3 className="mb-[30px] uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Terms & Conditions
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal space-y-[15px]">

              <p>Terms of Service</p>
              <p>Refund Policy</p>
              <p>Privacy Policy</p>
              <p>Shipping Policy</p>

            </div>

          </div>

          <div className="flex flex-col">

            <h3 className="mb-[30px] uppercase text-[15px] tracking-[.2em] font-bold leading-[1.65]">
              Open an account
            </h3>

            <div className="flex flex-col mb-4 text-[15px] leading-[1.65] font-normal">

              <p className="max-w-[270px] mb-5">
                Get exclusive pricing on all our brands, volume discounts, plus partnership opportunities aimed at growing your business.
              </p>

              <span className="underline text-[#9DAEFF]">
                Apply for a Wholesale Account
              </span>

            </div>

          </div>

        </div>
      
      </div>

    </footer>

  )
}

export default Footer