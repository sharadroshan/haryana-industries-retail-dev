"use client"
import React from 'react';
import Slider from "react-slick";
import { CubeIcon, CircleStackIcon, FireIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
            name: 'Mrs Shailja',
            message: "I want to express my gratitude to the team at Haryana Industries for their outstanding customer care. From the initial inquiry to the completion of the service, every interaction was met with genuine kindness and a willingness to help. The staff demonstrated a high level of professionalism, and their commitment to ensuring customer satisfaction was evident throughout the entire process.",
            icon: <CubeIcon />
        },
        {
            name: 'Mr Raghunath',
            message: "I recently enlisted the services of Haryana Indsutries] for MSME schemes, and I am incredibly impressed with the efficiency and timeliness of their work. The team demonstrated a high level of expertise and completed the job well within the agreed-upon timeframe.",
            icon: <FireIcon />
        },
        {
            name: 'Mr Ravi Singhla',
            message: "Choosing Haryana Industrieswas the best decision I made for my tax filing. Their ability to tailor their services to meet my unique requirements was truly impressive. The team took the time to understand my goals and challenges, providing a customized solution that exceeded my expectations.",
            icon: <CircleStackIcon />
        },
        {
            name: 'Mr Shyam Kapoor',
            message: "I want to express my gratitude to Haryana Industries  for their transparent and honest approach to service. Throughout the entire process, they were upfront about costs, timelines, and expectations.",
            icon: <HeartIcon />
        },
    ];
    return (
        <>
            <section className='coponies-section pt-5 px-5 xl:pt-10 xl:pb-20 bg-gray' >
                <div className='container mx-auto'>
                    <div className='section-title text-center'>
                        <h6 className='font-semibold text-primary text-sm xl:text-xl'>Clients Feedback</h6>
                        <h4 className='font-bold text-secondary text-3xl xl:text-5xl mt-2'>Testimonial<span className=' text-blue'></span></h4>
                    </div>
                    <div className='xl:mt-20 mt-5'>
                        <Slider {...settings} style={{ padding: '0px 20px' }}>
                            {
                                dummyArray.map((item, index) => {
                                    return (
                                        <div className='mb-10 text-left lg:px-5' key={index}>
                                            {/* <div className='cursor-pointer mx-auto bg-white rounded-[20px] p-10 text-secondary hover:bg-primary  hover:text-white text-center ' >
                                                {item.icon}
                                            </div> */}
                                            <div className='cursor-pointer mx-auto bg-white rounded-[20px] lg:p-10 p-5 lg:h-[250px]'>
                                                <p>{item.message}</p>
                                                <h4 className='font-semibold text-[18px] mt-4'>- {item.name}</h4>
                                            </div>

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
