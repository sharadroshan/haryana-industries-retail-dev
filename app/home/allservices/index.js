"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export const AllServices = () => {

    var settings = {
        dots: true,
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
            name: 'Registration of Company'
        },
        {
            name: 'Copy Right Registration'
        },
        {
            name: 'Patents Registration'
        },
        {
            name: 'BIS Registration'
        },
        {
            name: 'ISO 9001:2008 '
        },
        {
            name: 'ISO 14000'
        },
        {
            name: 'ISO 22000'
        },
        {
            name: 'HACCP'
        },
        {
            name: 'HALAL'
        },
        {
            name: 'PAN'
        },
        {
            name: 'TAN'
        },
        {
            name: 'FSSAI'
        },
        {
            name: 'BRICK KILN LICENCE'
        },
        {
            name: 'Accounting Services'
        },
        {
            name: 'Auditing Services'
        },
        {
            name: 'Societies under The Haryana'
        },
        {
            name: 'Registration of Trust & Society'
        },
        {
            name: 'Registration of Trust / NGO'
        },
        {
            name: 'NOC from DTP '
        },
        {
            name: 'NOC Forest Department'
        },
        {
            name: 'NOC from Fire Department'
        },
        {
            name: 'NOC from NHAI '
        },
        {
            name: 'Trademarks'
        },
        {
            name: 'Filing of Application'
        }
    ];
    return (
        <>
            <div className='xl:mt-20'>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-[50px] lg:mt-[100px]">
                    {
                        dummyArray.map((item, index) => {
                            return (
                                <div className='service-card shadow p-4 rounded-2xl bg-white mb-3' key={index}>
                                    <h4 className='font-bold text-left text-[20px] '>{item.name}</h4>
                                    <div className='flex items-start justify-between w-full '>
                                        <div>
                                            <h3 className='text-primary text-[28px] font-bold'>{index + 1 }03</h3>
                                            <h6>Schemes</h6>
                                        </div>
                                        <div className='bg-gray rounded-full w-[80px] h-[80px] flex items-center justify-end p-5 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="41.477" height="47.711" viewBox="0 0 41.477 47.711">
                                                <g data-name="Group 9383">
                                                    <path data-name="Path 25474" d="M108.326 60.535h-15.7a3.182 3.182 0 0 1-2.065-.74c-1.362-1.157-2.021-3.091-2.021-5.9 0-6.914 4.131-17.278 10.832-22.163.007 0 .007 0 .014.007a2.726 2.726 0 0 0 1.062.22h2.988a4.314 4.314 0 0 0-1.5 3.267.527.527 0 0 0 1.055 0 3.27 3.27 0 0 1 6.541 0 .527.527 0 0 0 1.055 0 4.315 4.315 0 0 0-1.5-3.267h2.988a2.617 2.617 0 0 0 1.069-.227c3.3 2.417 6.357 6.562 8.416 11.433a.536.536 0 0 0 .7.286.527.527 0 0 0 .278-.7 29.042 29.042 0 0 0-8.5-11.667 2.651 2.651 0 0 0-1.245-4.365 14.207 14.207 0 0 0 1.941-6.628 4.011 4.011 0 0 0-1.018-3.039c-1.179-1.143-3.179-1.069-5.486-.989a64.513 64.513 0 0 1-3.933-.008c-2.314-.081-4.3-.146-5.486.989a4 4 0 0 0-1.018 3.039 14.122 14.122 0 0 0 1.941 6.628 2.665 2.665 0 0 0-1.956 2.563 2.712 2.712 0 0 0 .71 1.809c-6.811 5.164-11.008 15.718-11.008 22.8 0 3.149.784 5.339 2.4 6.716a4.225 4.225 0 0 0 2.754 1h15.7a.525.525 0 0 0 .527-.527.533.533 0 0 0-.535-.534zm-8.774-42.73c.857-.827 2.644-.769 4.71-.7 1.289.044 2.746.044 4.035 0 2.065-.073 3.852-.132 4.71.7a3.05 3.05 0 0 1 .7 2.278 13.2 13.2 0 0 1-2.036 6.511H100.9a13.218 13.218 0 0 1-2.036-6.511 3.03 3.03 0 0 1 .688-2.278zm.9 9.851H112.1a1.613 1.613 0 0 1 .849 2.988.025.025 0 0 0-.015.007 1.481 1.481 0 0 1-.366.161c-.014.007-.029.007-.044.015a1.537 1.537 0 0 1-.41.059h-11.669a1.837 1.837 0 0 1-.4-.051c-.029-.007-.059-.022-.1-.029a1.461 1.461 0 0 1-.308-.139 1.61 1.61 0 0 1-.813-1.392 1.63 1.63 0 0 1 1.626-1.619z" transform="translate(-87.231 -15.788)" style={{ strokeWidth: ".5px", fill: "#747474", stroke: "#747474" }} />
                                                    <path data-name="Path 25476" d="M211.54 285.167a.528.528 0 0 0 .234-.71 8.162 8.162 0 1 0-4.607 11.426.53.53 0 1 0-.344-1 7.1 7.1 0 1 1 4.014-9.939.519.519 0 0 0 .7.227z" transform="translate(-186.688 -256.987)" style={{ strokeWidth: ".5px", fill: "#747474", stroke: "#747474" }} />
                                                    <path data-name="Path 25505" d="M392.907 143.946a.529.529 0 0 0-.742-.094l-6.949 5.379a.529.529 0 1 0 .648.837l6.949-5.379a.529.529 0 0 0 .094-.742z" transform="translate(-357.009 -108.721)" style={{ strokeWidth: ".5px", fill: "#2563eb", stroke: "#2563eb" }} />
                                                    <path data-name="Path 25506" d="M383.595 124.406a2.127 2.127 0 1 0-1.409-.807 2.123 2.123 0 0 0 1.409.807zm-.788-2.24a1.066 1.066 0 0 1 1.055-.93 1.079 1.079 0 0 1 .135.008 1.065 1.065 0 1 1-1.191.922z" transform="translate(-353.968 -86.786)" style={{ strokeWidth: ".5px", fill: "#2563eb", stroke: "#2563eb" }} />
                                                    <path data-name="Path 25507" d="M445.166 199.041a2.125 2.125 0 1 0 1.41.807 2.124 2.124 0 0 0-1.41-.807zm.788 2.24a1.065 1.065 0 1 1-1.057-1.2 1.084 1.084 0 0 1 .135.009 1.066 1.066 0 0 1 .921 1.19z" transform="translate(-410.783 -160.185)" style={{ strokeWidth: ".5px", fill: "#2563eb", stroke: "#2563eb" }} />
                                                    <path data-name="Path 25508" d="M327.239 67.579a1.863 1.863 0 0 0 0-2.965 2.283 2.283 0 0 1-.454-.67 2.353 2.353 0 0 1 .056-.846 1.826 1.826 0 0 0-1.463-2.516 1.281 1.281 0 0 1-1.113-1.113 1.826 1.826 0 0 0-2.516-1.463 2.354 2.354 0 0 1-.846.056 2.294 2.294 0 0 1-.67-.454 1.863 1.863 0 0 0-2.965 0 2.284 2.284 0 0 1-.67.454 2.353 2.353 0 0 1-.846-.056 1.826 1.826 0 0 0-2.516 1.463 1.281 1.281 0 0 1-1.113 1.113 1.825 1.825 0 0 0-1.463 2.518 2.361 2.361 0 0 1 .056.846 2.293 2.293 0 0 1-.454.67 1.863 1.863 0 0 0 0 2.965 2.283 2.283 0 0 1 .454.67 2.354 2.354 0 0 1-.056.846 1.825 1.825 0 0 0 1.463 2.516 1.281 1.281 0 0 1 1.113 1.113 1.826 1.826 0 0 0 2.516 1.463 2.361 2.361 0 0 1 .846-.056 2.294 2.294 0 0 1 .67.454 1.863 1.863 0 0 0 2.965 0 2.283 2.283 0 0 1 .67-.454 2.354 2.354 0 0 1 .846.056 1.826 1.826 0 0 0 2.516-1.463 1.281 1.281 0 0 1 1.113-1.113 1.826 1.826 0 0 0 1.463-2.516 2.362 2.362 0 0 1-.056-.846 2.273 2.273 0 0 1 .454-.672zm-.812-.679a2.938 2.938 0 0 0-.664 1.076 3.03 3.03 0 0 0 .035 1.3 1.763 1.763 0 0 1 .025.9c-.1.18-.462.311-.809.438a2.245 2.245 0 0 0-1.742 1.742c-.127.346-.258.7-.439.809a1.76 1.76 0 0 1-.9-.025 3.026 3.026 0 0 0-1.3-.035 2.934 2.934 0 0 0-1.076.664c-.287.24-.584.488-.8.488s-.516-.248-.8-.488a2.937 2.937 0 0 0-1.076-.664 1.846 1.846 0 0 0-.48-.059 4.852 4.852 0 0 0-.819.093 1.763 1.763 0 0 1-.9.025c-.18-.1-.311-.462-.438-.809a2.245 2.245 0 0 0-1.742-1.742c-.346-.127-.7-.258-.809-.438a1.76 1.76 0 0 1 .025-.9 3.026 3.026 0 0 0 .035-1.3 2.934 2.934 0 0 0-.664-1.076c-.24-.287-.488-.584-.488-.8s.248-.516.488-.8a2.939 2.939 0 0 0 .664-1.076 3.029 3.029 0 0 0-.035-1.3 1.763 1.763 0 0 1-.025-.9c.1-.18.462-.311.809-.438a2.245 2.245 0 0 0 1.742-1.742c.127-.346.258-.7.438-.809a1.76 1.76 0 0 1 .9.025 3.025 3.025 0 0 0 1.3.035 2.934 2.934 0 0 0 1.076-.664c.288-.24.585-.488.8-.488s.516.248.8.488a2.937 2.937 0 0 0 1.076.664 3.03 3.03 0 0 0 1.3-.035 1.763 1.763 0 0 1 .9-.025c.18.1.311.462.439.809a2.245 2.245 0 0 0 1.742 1.742c.346.127.7.258.809.438a1.761 1.761 0 0 1-.025.9 3.025 3.025 0 0 0-.035 1.3 2.934 2.934 0 0 0 .664 1.076c.24.287.488.584.488.8s-.249.514-.489.801z" transform="translate(-286.746 -27.858)" style={{ strokeWidth: ".5px", fill: "#2563eb", stroke: "#2563eb" }} />
                                                    <path data-name="Path 25509" d="M.8-9.045h4.175v.01a6.808 6.808 0 0 1-.42.691H3.443a1.761 1.761 0 0 1 .312.743h1.189q.02.005.02.02-.4.676-.41.681h-.767a2.222 2.222 0 0 1-.292.84 1.956 1.956 0 0 1-.686.645 2.43 2.43 0 0 1-1.157.328v.01a1.91 1.91 0 0 0 .271.4L3.981-1.85v.133a.018.018 0 0 1-.02.02h-.907Q.606-4.928.606-4.943V-5.6l.01-.026a3.125 3.125 0 0 0 .507.036A1.574 1.574 0 0 0 2.829-6.6a.921.921 0 0 0 .051-.3H.4q-.02 0-.02-.026Q.791-7.6.8-7.6h1.973v-.01a1.22 1.22 0 0 0-.656-.6 1.835 1.835 0 0 0-.625-.128H.391v-.026q.4-.681.409-.681z" transform="translate(15.105 37.211)" style={{ strokeWidth: ".5px", fill: "#2563eb", stroke: "#2563eb" }} />
                                                </g>
                                            </svg>
                                        </div>

                                    </div>

                                    {/* <div className='flex items-center'>
                                        <button className='bg-primary hover:bg-secondary p-2 text-white  rounded w-full mt-5 mr-1 flex justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px' }} className='mr-2'>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                            </svg>

                                            Need Help
                                        </button>
                                        <a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' target='_blank' className='w-full '>
                                            <button className='bg-primary hover:bg-secondary p-2 text-white  rounded w-full mt-5  flex justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px' }} className='mr-2'>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                View PDF
                                            </button>
                                        </a>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
