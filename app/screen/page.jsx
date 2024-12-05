"use client"
import { useState } from 'react';
import { TopHeader } from "../components/topheader";
import { Navbar } from "../components/navbar";
import { Slider } from './components/slider'
import { Services } from './components/services'
import { OtherServices } from './components/otherservices'
import { Testimonial } from './components/testimonial'
import { Footer } from '../components/footer'

const Page = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div >
            <TopHeader />
            <Navbar />
            <Slider />
            <Services />
            <OtherServices />
            <Testimonial />
            <Footer />
        </div >
    )
}

export default Page