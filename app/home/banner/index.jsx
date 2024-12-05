"use client"
import React from 'react';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import './style.css';

export const Banner = ({ isAccessToken, handleAddCompany }) => {
    return (
        <div className="banner-main">
            <div className='banner-image'>
                <Image
                    src="/banner/blur.jpg"
                    alt="Picture of the author"
                    fill={true}
                />
            </div>
            <div className='banner-content'>
                <div className="xl:container mx-auto  h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  h-full">
                        <div className='flex items-start lg:items-center '>
                            <div className="ml-4 xl:ml-10 mr-4 lg:mt-0 mt-5">
                                <h1 className="text-white text-4xl font-bold tracking-tight text-left text-xl lg:text-5xl" style={{ letterSpacing: '2px' }}>
                                    {
                                        isAccessToken ? 'Welcome Khushboo To'
                                            :
                                            "Let’s Start With"
                                    }
                                    <br />
                                    Haryana Industries
                                </h1>
                                <p className="text-white mt-2 text-sm lg:text-lg  text-left lg:mt-5">
                                    Based in Sirsa, Weat, Haryana Industries works with clients in taking right decision to get Subsidies, Clearances, NOC, Licenses, CLU and Finance etc.
                                </p>
                                <div className='flex justify-start mt-5'>
                                    {
                                        isAccessToken ?
                                            <button className='bg-white hover:bg-secondary text-primary rounded-lg py-3 px-5 font-semibold cursor-pointer z-999' onClick={handleAddCompany}>Add Enterprise</button>
                                            :
                                            <>
                                                <Link href='/login'>
                                                    <button className='bg-white hover:bg-secondary text-primary hover:text-white rounded-lg py-3 px-5 font-semibold cursor-pointer z-999'>Get Started</button>
                                                </Link>
                                                <Link href='/login' className='mx-2'>
                                                    <button className='bg-white hover:bg-secondary text-primary hover:text-white rounded-lg py-3 px-5 font-semibold cursor-pointer z-999'>Our Services</button>
                                                </Link>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='relative h-full'>
                            <Image
                                src="/home/girl-smile.png"
                                width={610}
                                height={700}
                                alt="Picture of the author"
                                className='absolute bottom-0 '
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
