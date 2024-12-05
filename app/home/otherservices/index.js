"use client"
import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

import { CubeIcon, CircleStackIcon, FireIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export const OtherServices = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

    const dummyArray = [
        {
            name: 'Shri Kunj bihari',
            image: '/team/man-1.png',
            icon: <CubeIcon />
        },
        {
            name: 'Shifali Mahipal',
            image: '/team/girl-1.png',
            icon: <FireIcon />
        },
        {
            name: 'Anand Mahipal',
            image: '/team/man-2.png',
            icon: <CircleStackIcon />
        },
        {
            name: 'Khushboo Jain',
            image: '/team/girl-2.png',
            icon: <HeartIcon />
        }
    ];
    return (
        <>
            <section className='coponies-section pt-5 px-5 xl:pt-20 xl:pb-20 bg-white'>
                <div className='container mx-auto'>
                    <div className='section-title text-center'>
                        <h4 className='font-bold text-secondary text-3xl xl:text-5xl mt-2'>Our Expert Panel<span className=' text-blue'></span></h4>
                    </div>
                    <div className='mt-20'>
                        <Slider {...settings} style={{ padding: '0px 20px' }}>
                            {
                                dummyArray.map((item, index) => {
                                    return (
                                        <div className='mb-10 text-center ' key={index}>
                                            <div className='bg-primary rounded-full h-[200px] w-[200px] flex items-center justify-center mx-auto'>
                                                <Image
                                                    src={item.image}
                                                    alt="team member"
                                                    width={200}
                                                    height={200}
                                                    className='mx-auto rounded-full'
                                                />
                                            </div>

                                            <h4 className='text-primary font-semibold text-[23px] mt-4'>{item.name}</h4>
                                            <p className=''>Scheme & Support Expert</p>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
