"use client"
import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export const Companies = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cursor: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <>
            <section className='coponies-section pt-10 pb-10 xl:pt-10 xl:pb-20 bg-white'>
                <div className='xl:container mx-auto'>
                    <div className='section-title text-center px-5'>
                        <h6 className='font-semibold  text-sm xl:text-xl'>COMPANIES</h6>
                        <h4 className='font-bold text-primary text-3xl xl:text-5xl mt-2'>Working with our regular componies <span className=' text-blue'> </span></h4>
                    </div>
                    <div className='xl:mt-20'>
                        <Slider {...settings} >
                            <div className='shadow-card p-3'>
                                <div className='bg-gray h-[150px] flex items-center justify-center rounded-2xl'>
                                    <Image
                                        src="/companies/1.jpg"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                        className='mx-auto'
                                    />
                                </div>
                            </div>
                            <div className='shadow-card p-3 '>
                                <div className='bg-gray h-[150px] flex items-center justify-center rounded-2xl'>
                                    <Image
                                        src="/companies/2.jpg"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className='shadow-card p-3 '>
                                <div className='bg-gray h-[150px] flex items-center justify-center rounded-2xl'>
                                    <Image
                                        src="/companies/3.jpg"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className='shadow-card p-3 '>
                                <div className='bg-gray h-[150px] flex items-center justify-center rounded-2xl'>
                                    <Image
                                        src="/companies/4.png"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className='shadow-card p-3 '>
                                <div className='bg-gray h-[150px] flex items-center justify-center rounded-2xl'>
                                    <Image
                                        src="/companies/5.png"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                            <div className='shadow-card p-3 '>
                                <div className='bg-gray h-[150px] flex items-center justify-center rounded-2xl'>
                                    <Image
                                        src="/companies/1.jpg"
                                        alt="Logo"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
