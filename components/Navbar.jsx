import React from 'react';
import Eredita_logo from "../public/eredita_logo.svg";
import Cineplex_logo from "../public/cineplex_logo.svg";
import Button from './UI/Button';
import Menu from "../public/menu.svg";

function Navbar() {

  return (

    <header className="w-full space-y-4 1.5xl:space-y-0 px-5 xl:px-20 1.5xl:space-x-6 1.5xl:pl-[100px] 1.5xl:pr-[172px] py-9  flex items-center flex-col 1.5xl:flex-row justify-center 1.5xl:justify-between bg-primary">

      <nav className="flex items-center flex-col
       1.5xl:flex-row space-y-5 1.5xl:space-y-0 w-full xs:w-max md:w-full justify-center 1.5xl:justify-between">

        <div className="max-w-[361px] w-full">
          <Menu/>
        </div>
        

        <div className="flex items-center space-x-2">

          <p className="text-white font-bold leading-9">Questions? Call us:</p>
          <span className="text-white font-semibold leading-9">1-855-793-EYES</span>

        </div>        

      </nav>

      <a href="" className="block">
        <Button
          color={"primary"}
          text={"Apply To Participate"}
          size={"small"}
          type={"button"}
        />
      </a>

    </header>

  )
  
}

export default Navbar