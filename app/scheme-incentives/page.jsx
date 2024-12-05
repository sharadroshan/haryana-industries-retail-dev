"use client"
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { TopHeader } from "../components/topheader";
import { Navbar } from "../components/navbar";
import { Footer } from '../components/footer';
import Link from 'next/link';


const Page = () => {
    const dummyArray = ['', '', '', '', '', '', '', ''];
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div>
            <TopHeader />
            <Navbar />

            <section className='coponies-section py-10  xl:pt-10 xl:pb-40 mt-0 lg:mt-10' style={{ background: '#f1f1f1' }}>
                <div className='xl:container mx-auto px-5'>
                    <div className='section-title text-center mb-10'>
                        <h6 className='font-semibold  text-sm xl:text-xl'>Service</h6>
                        <h4 className='font-bold text-primary text-3xl xl:text-5xl mt-2'>Scheme<span className=' text-blue'> Incentives </span></h4>
                    </div>
                    <div className=''>
                        <h3 className='text-left font-semibold ml-3 text-primary border-b py-2 text-[22px]'>Total Scheme Incentives ({dummyArray?.length}) </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                            {
                                dummyArray.map((item, index) => {
                                    return (
                                        <div className='service-card py-5 px-5 bg-white hover:bg-primary-light text-primary mb-3 p-2 rounded-2xl' key={index}>
                                            <div className='grid grid-cols-1 lg:grid-cols-1 gap-2 '>
                                                <div>
                                                    <div className='flex items-center justify-center h-full w-full'>
                                                        <div className='bg-primary h-[150px] w-[150px] flex items-center justify-center  p-4 rounded-full'>
                                                            <Image
                                                                src="/svgIcons/gift-white.svg"
                                                                width={80}
                                                                height={80}
                                                                alt="Picture of the author dd"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-span-2 text-center'>
                                                    <h4 className='font-bold text-center text-[20px] m-0'>Scheme Name {index + 1}</h4>
                                                    <p className='mt-3 text-secondary'>
                                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>
                                                    <div className='mt-4'>
                                                        <div className='flex items-center justify-center'>
                                                            <a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' target='_blank' className='w-full mr-2 mb-0'>
                                                                <button className='whitespace-nowrap border hover:bg-primary px-4 py-2 text-primary hover:text-white  rounded w-full  mr-1 flex justify-center'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px' }} className='mr-2'>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                    </svg>
                                                                    View PDF
                                                                </button>
                                                            </a>
                                                            <button onClick={openModal} className='whitespace-nowrap border hover:bg-primary px-4 py-2 text-primary hover:text-white  rounded w-full   flex justify-center'>

                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px' }} className='mr-2'>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                                </svg>
                                                                Call For Help
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <div onClick={openModal} className=' fixed right-5 bottom-5 w-[75px]  h-[75px] bg-blue flex items-center justify-center rounded-[50px] text-white z-[999] cursor-pointer '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
            </div>
            <div onClick={openModal} className='fixed right-[75px] bottom-[35px] px-5  py-3 bg-blue flex items-center justify-center rounded-[10px] text-white font-bold z-[999] cursor-pointer '>
                Call For Help
            </div>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={openModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto " style={{ background: '#f2f2f2' }}>
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white lg:p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 ">
                                        <div className="relative bg-white px-6 pt-10 pb-9 mx-auto w-full max-w-lg rounded-2xl">
                                            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                                                <div className="flex flex-col items-center justify-center text-center space-y-2">

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='text-primary' style={{ width: '100px' }}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                                    </svg>

                                                    <div className="font-semibold text-2xl lg:text-3xl">
                                                        <h3 className='text-primary'>Request Send Successfully </h3>
                                                    </div>

                                                    <div className="flex flex-row text-sm font-medium text-gray-400">
                                                        <p>We have receive your request . Please wait 10 mins for experts call.</p>
                                                    </div>

                                                    <div className='flex justify-end w-full mt-10'>
                                                        <button onClick={closeModal} className='mt-10 border hover:bg-secondary p-2 px-3 whitespace-nowrap text-primary hover:text-white rounded w-full flex justify-center mr-3'>
                                                            Close
                                                        </button>
                                                        <button className='mt-10 bg-primary hover:bg-secondary p-2 px-3 text-white whitespace-nowrap rounded w-full flex justify-center'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px' }} className='mr-2'>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                            </svg>
                                                            Resend Request
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Footer />
        </div>
    )
}

export default Page