import React from 'react';
import { TopHeader } from "../components/topheader";
import { Navbar } from "../components/navbar";
import { Footer } from '../components/footer';


const Page = () => {
    const dummyArray = ['', '', '', '', '', '', '', ''];

    return (
        <div>
            <TopHeader />
            <Navbar />

            <section className='coponies-section py-10  xl:pt-10 xl:pb-40 mt-0 lg:mt-10' style={{ background: '#f1f1f1' }}>
                <div className='xl:container mx-auto px-5'>
                    <div className='section-title text-center'>
                        <h6 className='font-semibold  text-sm xl:text-xl'>Selected Service</h6>
                        <h4 className='font-bold text-primary text-3xl xl:text-5xl mt-2'>Know Your  <span className=' text-blue'>Scheme</span></h4>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-[50px] lg:mt-[100px]">
                        {
                            dummyArray.map((item, index) => {
                                return (
                                    <div className='service-card shadow p-4 rounded-2xl bg-white mb-3' key={index}>
                                        <div className='bg-gray rounded-full w-[100px] h-[100px] flex items-center justify-center p-5 mx-auto '>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 mx-auto text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                            </svg>
                                        </div>
                                        <h4 className='font-bold text-center text-[20px] mt-5'>Dummy Scheme Name</h4>
                                        <div className='flex items-center'>
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
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
            <div className='fixed right-5 bottom-5 w-[75px]  h-[75px] bg-blue flex items-center justify-center rounded-[50px] text-white z-[999] cursor-pointer '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
            <div className='fixed right-[75px] bottom-[35px] px-5  py-3 bg-blue flex items-center justify-center rounded-[10px] text-white font-bold z-[999] cursor-pointer '>
                Call For Help
            </div>
            <Footer />
        </div>
    )
}

export default Page