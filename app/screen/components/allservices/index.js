"use client"
import React from 'react';
import Slider from "react-slick";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export const AllServices = () => {

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

    const dummyArray = [
        {
            name: 'Scheme Acentives'
        },
        {
            name: 'MSME Classification'
        },
        {
            name: 'Compliance Audit'
        },
        {
            name: 'Scheme Acentives'
        },
        {
            name: 'MSME Classification'
        },
        {
            name: 'Compliance Audit'
        },
        {
            name: 'Scheme Acentives'
        },
        {
            name: 'MSME Classification'
        },
        {
            name: 'Compliance Audit'
        },
    ];
    return (
        <>
            <div className='xl:mt-20'>
                <Slider {...settings} style={{padding:'0px 20px'}}>
                    {
                        dummyArray.map((item, index) => {
                            return (
                                <div className='mb-10' >
                                    <div className='bg-white border rounded-[20px] p-3 py-5 mr-5 text-center' >
                                        <h4 className='font-semibold text-[20px]'>{item.name}</h4>
                                        <button className='flex items-center justify-center w-full  text-primary rounded px-5 py-1 mt-5'>
                                            View Details <ArrowRightCircleIcon className="h-2 w-6 ml-2" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}
