import React from 'react';
import Image from 'next/image';
import './style.css';

export const Process = () => {
    return (
        <section className='work-process-section pt-10 pb-10 xl:pt-20 xl:pb-20 bg-white' >
            <div className='container mx-auto'>
                <div className='section-title text-center px-5'>
                    {/* <h6 className='font-semibold text-primary text-sm xl:text-xl'>WORK PROCESS</h6> */}
                    <h4 className='font-bold text-secondary text-xl xl:text-5xl mt-2'>How Haryana Industry works?<span className=' text-blue'></span></h4>
                </div>
                <div className='process-grid mt-12 lg:mt-20 relative px-5 lg:px-0'>
                    <div className='process-shape'>
                        <Image
                            src="/shapes/process-shape-1.png"
                            alt="Picture of the author"
                            width={500}
                            height={100}
                            className='mx-auto'
                        />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4'>
                        <div className='flex items-center lg:justify-end justify-center'>
                            <div className='process-box' >
                                <div className='process-col flex items-center justify-center bg-white lg:mr-12 mr-0'>
                                    <div className='process-step-lable-up bg-primary'>01</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>Generate List</h4>
                                    <p className='text-center'>
                                        Get a personalized list of relevant government schemes by entering some basic information about your company.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        <div className='flex items-center justify-center lg:pt-40 pt-10'>
                            <div className='process-box'>
                                <div className='process-col flex items-center justify-center bg-white'>
                                    <div className='process-step-lable-down bg-primary'>02</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>Obtain information</h4>
                                    <p className=' text-center'>
                                        Before deciding, review the benefits listed under the schemes, add them to your cart, and create a report.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        <div className='flex items-center justify-center lg:pt-24 pt-10'>
                            <div className='process-box'>
                                <div className='process-col flex items-center justify-center bg-white '>
                                    <div className='process-step-lable-up bg-primary'>03</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>
                                        Obtain a Scheme Discovery Report
                                    </h4>
                                    <p className='text-center'>
                                        Provide a personalized, in-depth report for each of the schemes that made the short list.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        <div className='flex items-center justify-center'>
                            <div className='process-box'>
                                <div className='process-col flex items-center justify-center bg-white ml-10'>
                                    <div className='process-step-lable-down bg-primary'>04</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                </div>
                                <div className='mt-4 w-100'>
                                    <h4 className='text-primary font-semibold text-1xl text-center'>Get Advantage</h4>
                                    <p className='text-center'>
                                        Speak with scheme professionals for assistance in utilizing the schemes.
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/* col end */}
                    </div>
                </div>
            </div>
        </section>
    )
}
