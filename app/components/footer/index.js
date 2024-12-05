import React from 'react';
import './style.css';

export const Footer = () => {
    return (
        <section className='footer-section pt-10 lg:pt-20 pb-10 relative'>
            <div className='xl:container mx-auto'>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        <div className='footer-col-1 px-5'>
                            <div className='footer-logo text-left '>
                                <h2 className=' m-0 text-white font-bold text-[40px]' style={{ lineHeight: '0.7' }}>Haryana <span className='text-white font-bold text-[20px] '>Industries</span></h2>
                            </div>
                            <div className='mt-8'>
                                <h4 className='text-white font-bold mb-1'>About Us</h4>
                                <p className='text-gray'>
                                    Based in Sirsa, We, Haryana Industries works with clients in taking right decision by helping them for setting up industrial projects and availing maximum incentive.
                                </p>
                            </div>
                            <div className='flex items-center mt-10 '>
                                <div className='social-icon'>
                                    <div className="flex justify-center space-x-4 text-gray">

                                        <div className='social-icon flex justify-center items-center bg-white text-primary hover:bg-secondary hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5">
                                                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                            </svg>
                                        </div>

                                        <div className='social-icon flex justify-center items-center bg-white text-primary hover:bg-secondary hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                        </div>

                                        <div className='social-icon flex justify-center items-center bg-white text-primary hover:bg-secondary hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5">
                                                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                        </div>

                                        <div className='social-icon flex justify-center items-center bg-white text-primary hover:bg-secondary hover:text-white'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-5 h-5">
                                                <path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-col-2 px-5 mt-7 lg:mt-0'>
                            <h4 className='text-white font-semibold text-xl'>Contact</h4>
                            <div className='footer-details lg:mt-10'>
                                <p className='text-gray '>
                                    <a href='mailto:info@haryanaindustries.com' className='text-gray hover:text-secondary flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>

                                        <span className='ml-3'>info@haryanaindustries.com</span>
                                    </a>
                                </p>
                                <p className='text-gray'>
                                    <a href='tel:+919416351167' className='text-gray hover:text-secondary flex items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>

                                        <span className='ml-3'>
                                            +91 94163 51167
                                        </span>
                                    </a>
                                    <a href='tel:+919050902425' className='text-gray hover:text-secondary flex items-center'>
                                        <span className='ml-11'>
                                            +91 90509 02425
                                        </span>
                                    </a>
                                </p>
                                <p className='text-gray flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '60px', height: '60px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span className='ml-3'>
                                        DGM TECHNOLOGIES PVT. LTD.
                                        <br />
                                        DGM Building, Old Court Road, Near Railway Crossing
                                        Sirsa – 125055 (Haryana)
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='footer-col-3 px-5 mt-5 lg:mt-0'>
                            <h4 className='text-white font-semibold text-xl'>Opening Hours</h4>
                            <div className='footer-details lg:mt-10'>
                                <p className='text-gray flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='ml-3'>Morning – 10:00 AM To  2:00 PM</span> <br />
                                </p>
                                <p className='text-gray flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className='ml-3'>Evening – 04:00 PM To  8:00 PM</span>
                                </p>
                            </div>
                        </div>
                        <div className='footer-col-3 px-5 mt-5 lg:mt-0'>
                            <h4 className='text-white font-semibold text-xl'>News Letter</h4>
                            <div className='footer-details lg:mt-10'>
                                <p className='text-gray flex items-center'>
                                    <span className='ml-0'>Subscribe our newsletter to get our latest update & news.</span>
                                </p>
                                <div className='newsletter flex items-center justify-between bg-white '>
                                    <input type='email' placeholder='Email Address' className='text-black' />
                                    <button className='bg-white text-primary'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copyright-section border-t mt-6 pt-8 text-gray'>
                    <h4 className='text-white font-bold text-center text-[20px]'>Disclaimer</h4>
                    <p className='text-gray text-center pt-4'>
                        We have downloaded the contents given in this website form various Govt. Portals. Therefore before making use of these information, please check the relevant website. Any and all information on this site is provided for informational purposes only and is not to be relied upon as a professional opinion whatsoever.
                    </p>
                </div>
                <div className='border-t mt-5 text-white'>
                    <p className='text-white text-center pt-5 font-lightbold'>© All Copyright 2024 by Haryana Industries</p>
                </div>
            </div>
        </section>
    )
}
