import Image from 'next/image'
import React from 'react'
import Button from './UI/Button'

function ContactUs() {
  return (

    <section className="py-[45px] w-full px-[7.5%] bg-[#F7F7FB] flex flex-col">

      <h2 className="text-primary text-[32px] uppercase text-center leading-[38px] tracking-[.145em] mb-10 font-black">Contact us</h2>

      <div className="grid grid-cols-1 md2:grid-cols-2 w-full">
        
        <div className="hidden md2:block">

          <Image
            src="/contact.png"
            alt="contact.png"
            width={593}
            height={576}
            quality={100}
            layout="responsive"
          />
          
        </div>

        <form className="bg-white flex space-y-8 flex-col w-full pt-8 pb-4 px-[25px] rounded-[10px] shadow-[0px_2px_6px_rgba(151,_172,_198,_0.25)]">

          <fieldset className="fieldset border-2 border-[rgba(0,_0,_0,_0.38)] rounded-[4px] relative after:absolute after:-top-2 after:left-3 after:content-['Full_Name']
            after:text-sm after:leading-4 after:tracking-[.4px] after:w-max after:text-[rgba(0,_0,_0,_0.6)] after:bg-white after:px-2
            focus-within:after:text-contact_us focus-within:border-contact_us
          ">

            <input className="p-4 text-black outline-none w-full rounded-[4px]" type="text" />

          </fieldset>

          <fieldset className="fieldset border-2 border-[rgba(0,_0,_0,_0.38)] rounded-[4px] relative after:absolute after:-top-2 after:left-3 after:content-['Contact_Number']
            after:text-sm after:leading-4 after:tracking-[.4px] after:w-max after:text-[rgba(0,_0,_0,_0.6)] after:bg-white after:px-2
            focus-within:after:text-contact_us focus-within:border-contact_us
          ">
            
            <input className="p-4 text-black outline-none w-full rounded-[4px]" type="text" />

          </fieldset>

          <fieldset className="fieldset border-2 border-[rgba(0,_0,_0,_0.38)] rounded-[4px] relative after:absolute after:-top-2 after:left-3 after:content-['Email_Address']
            after:text-sm after:leading-4 after:tracking-[.4px] after:w-max after:text-[rgba(0,_0,_0,_0.6)] after:bg-white after:px-2
            focus-within:after:text-contact_us focus-within:border-contact_us
          ">
            
            <input className="p-4 text-black outline-none w-full rounded-[4px]" type="text" />

          </fieldset>

          <fieldset className="fieldset border-2 border-[rgba(0,_0,_0,_0.38)] rounded-[4px] relative after:absolute after:-top-2 after:left-3 after:content-['Message']
            after:text-sm after:leading-4 after:tracking-[.4px] after:w-max after:text-[rgba(0,_0,_0,_0.6)] after:bg-white after:px-2
            focus-within:after:text-contact_us focus-within:border-contact_us
          ">

            <textarea className="p-4 resize-none text-black outline-none w-full rounded-[4px] min-h-[201px]" name="" ></textarea>
            

          </fieldset> 

          <div className="max-w-max ml-auto">
            <Button
              text="submit"
              color="primary"
              size="small"
              className="min-w-[155px]"
              type="submit"
            />
          </div>

        </form>

      </div>



    </section>

  )
}

export default ContactUs