"use client"
import React from 'react';
import Slider from "react-slick";
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
            icon: <CubeIcon />
        },
        {
            name: 'Shekhar Mahipal',
            icon: <FireIcon />
        },
        {
            name: 'Anand Mahipal',
            icon: <CircleStackIcon />
        },
        {
            name: 'Khushboo Jain',
            icon: <HeartIcon />
        }
    ];
    return (
        <>
            <section className='coponies-section pt-5 px-5 xl:pt-10 xl:pb-40' style={{ background: '#f1f1f1' }}>
                <div className='container mx-auto'>
                    {/* <div className='section-title text-center'>
                        <h6 className='font-semibold  text-sm xl:text-xl'>SERVICES</h6>
                        <h4 className='font-bold text-primary text-3xl xl:text-5xl mt-2'>Other Services<span className=' text-blue'></span></h4>
                    </div> */}
                    <div className='xl:mt-20'>
                        <Slider {...settings} style={{ padding: '0px 20px' }}>
                            {
                                dummyArray.map((item, index) => {
                                    return (
                                        <div className='mb-10 text-center' >
                                            <div className='cursor-pointer mx-auto bg-secondary rounded-[100px] p-10 text-white hover:bg-primary  hover:text-white text-center w-[170px] h-[170px]' >
                                                {item.icon}
                                            </div>
                                            <h4 className='font-semibold text-[18px] mt-4'>{item.name}</h4>
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
