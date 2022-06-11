import React from 'react';
import Eredita_logo from "../public/eredita_logo.svg";
import Cineplex_logo from "../public/cineplex_logo.svg";

function Navbar() {

  return (

    <header className="w-full px-5 xl:px-20 1.5xl:pl-[100px] 1.5xl:pr-[172px] py-9  flex items-center justify-center 1.5xl:justify-between bg-primary">

      <nav className="flex items-center space-x-[60px] w-full xs:w-max">

        <div className="flex items-center justify-between xs:justify-start xs:space-x-7">

          <a target="_blank" href="/" className="block w-[40%] xs:w-[183px]">
            <Eredita_logo/>
          </a>

          <div className="block w-1 h-10 bg-white"></div>

          <a target="_blank" href="/" className="block w-[40%] xs:w-[127px]">
            <Cineplex_logo/>
          </a>

        </div>

        <div className="hidden 1.5xl:flex items-center space-x-5">

          <p className="text-white font-bold leading-9">Have Questions? Call us at</p>
          <span className="text-white font-semibold leading-9">1-855-793-EYES</span>

        </div>        

      </nav>

      <a href="" className="hidden 1.5xl:block border border-white py-2.5 px-3 text-white uppercase tracking-[.145em] text-[13px] leading-4 font-bold text-center">
        Join THe promotion
      </a>

    </header>

  )
  
}

export default Navbar