import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

export default function Home() {
  return (

    <div className="flex flex-col">
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>

  )
}
