"use client"
import React from 'react';
import Link from 'next/link';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import './style.css';

export const Slider = ({ isAccessToken }) => {
    return (
        <div className="slider-main">
            <Carousel
                // autoPlay
                // infiniteLoop
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                swipeable={false}
                stopOnHover={false}
                transitionTime={1000}
                verticalSwipe='natural'
            >
                <div className="home-top-slider-slide">
                    <div className="slide-overlay"></div>
                    <Image
                        src="/slider/header-bg.jpeg"
                        alt="Picture of the author"
                        fill={true}
                    />
                    <div className="slide-overlay"></div>
                    <div className="slide-content">
                        <div className="xl:container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div className="ml-4 xl:ml-10 mr-4">
                                    <h1 className="text-white text-4xl font-bold tracking-tight text-left text-xl lg:text-6xl">
                                        {
                                            isAccessToken ? 'Welcome Khushboo !'
                                                :
                                                "Let’s Start With"
                                        }
                                        <br />
                                        Haryana Industries
                                    </h1>
                                    <p className="text-white mt-6 text-sm lg:text-lg leading-8 text-gray-600 text-left lg:mt-5 mt-2">
                                        Based in Sirsa, Weat, Haryana Industries works with clients in taking right decision to get Subsidies, Clearances, NOC, Licenses, CLU and Finance etc.
                                    </p>
                                    <div className='flex justify-start mt-5'>
                                        {
                                            isAccessToken ?
                                                <button className='bg-white hover:bg-secondary text-primary rounded-lg py-3 px-5 font-semibold cursor-pointer z-999' onClick={handleAddCompany}>Add Company</button>
                                                :
                                                <Link href='/login'>
                                                    <button className='bg-white hover:bg-primary text-primary hover:text-white rounded-lg py-3 px-5 font-semibold cursor-pointer z-999'>Get Started</button>
                                                </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
