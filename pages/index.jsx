import Head from 'next/head'
import Image from 'next/image'
import AuthorizedRetailer from '../components/AuthorizedRetailer'
import BannerWithText from '../components/BannerWithText'
import ContactUs from '../components/ContactUs'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Introduction from '../components/Introduction'
import Navbar from '../components/Navbar'
import Opportunity from '../components/Opportunity'
import Opthalmic from '../components/Opthalmic'
import SunCollection from '../components/SunCollection'
import Button from '../components/UI/Button'

export default function Home() {
  return (

    <div className="flex flex-col">

      <Navbar/>

      <Hero/>

      <BannerWithText/>

      <Introduction/>

      <SunCollection/>

      <Opthalmic/>

      <a href="" className="mt-9 select-none mb-12 max-w-max mx-auto">
        <Button
          color="primary"
          text="Apply To Participate"
          size="large"
          type="button"
        />
      </a>

      <HowItWorks/>

      <Opportunity/>

      <a href="" className="mt-9 mb-[68px] max-w-max mx-auto">
        <Button
          color="primary"
          text="Apply To Participate"
          size="large"
          type="button"
        />
      </a>

      <AuthorizedRetailer/>

      <ContactUs/>

      <FAQ/>

      <a href="" className="mt-[45px] mb-20 max-w-max mx-auto">
        <Button
          color="primary"
          text="Apply To Participate"
          size="large"
          type="button"
        />
      </a>

      <Footer/>

    </div>

  )
}
