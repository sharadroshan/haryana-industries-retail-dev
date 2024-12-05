"use client"
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';


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

export const Services = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <section className='coponies-section py-10  xl:pt-10 xl:pb-40 mt-0 lg:mt-10' >
                <div className='xl:container mx-auto px-5'>
                    <div className='section-title text-center mb-10'>
                        <h6 className='font-semibold text-primary text-sm xl:text-xl'>Services</h6>
                        <h4 className='font-bold text-secondary text-3xl xl:text-5xl mt-2'>All Services<span className=' text-blue'> </span></h4>
                    </div>
                    <div className='mt-20' >
                        <div className="grid grid-cols-1 gap-4 ">
                            <div className='col-span-2'>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                                    {
                                        dummyArray.map((item, index) => {
                                            return (
                                                <div className='service-card shadow p-8 rounded-2xl bg-white mb-3 p-2 rounded' key={index}>
                                                    <div className='flex items-start justify-between w-full'>
                                                        <div>
                                                            <h4 className='font-bold text-left text-[20px] '>{item.name}</h4>
                                                            <h5 className='text-left text-[18px] mt-2'>Offers - <span className='font-bold text-primary text-[22px] '>{index + 1}34{index + 1}</span></h5>
                                                        </div>
                                                        <Image
                                                            src="/svgIcons/money-hand.svg"
                                                            width={80}
                                                            height={80}
                                                            alt="Picture of the author dd"
                                                        />
                                                    </div>
                                                    <div className='flex items-center mt-5'>
                                                        <a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' target='_blank' className='w-full mr-2'>
                                                            <button className='border hover:bg-primary p-2 py-3 text-primary hover:text-white  rounded w-full mt-5 mr-1 flex justify-center'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px' }} className='mr-2'>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                </svg>

                                                                PDF Download
                                                            </button>
                                                        </a>
                                                        <button onClick={openModal} className='bg-primary hover:bg-secondary p-2 py-3 text-white hover:text-white rounded w-full mt-5  flex justify-center'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '25px' }} className='mr-2'>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                                            </svg>
                                                            Apply Now
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* <div>
                                <div className='service-card shadow p-8 rounded-2xl bg-white mb-3 p-2 rounded h-[300px] sticky top-32'>
                                    <div className='mt-5'>
                                        <div className='m-auto w-auto flex items-center justify-center text-center text-xl '>
                                            <div onClick={openModal} className='cursor-pointer w-[80px] h-[80px] bg-primary hover:bg-secondary text-white rounded-[40px] p-5'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='text-white' style={{ width: '45px' }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                                </svg>
                                            </div>
                                            <h3 className='text-center font-semibold ml-3'>Call For Experts Help</h3>
                                        </div>
                                        <p className='mt-10'><span className='font-bold'>Note</span> - Our experts is available within 10 mins after your request.</p>
                                    </div>
                                </div>
                            </div> */}
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

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='text-secondary' style={{ width: '100px' }}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                                    </svg>

                                                    <div className="font-semibold text-2xl lg:text-3xl">
                                                        <h3 className='text-blue'>Request Send Successfully </h3>
                                                    </div>

                                                    <div className="flex flex-row text-sm font-medium text-gray-400">
                                                        <p>We have receive your request . Please wait 10 mins for experts call.</p>
                                                    </div>

                                                    <div className='flex justify-end w-full mt-10'>
                                                        <button onClick={closeModal} className='mt-10 bg-primary hover:bg-secondary p-2 px-3 whitespace-nowrap text-white rounded w-full flex justify-center mr-3'>
                                                            Close
                                                        </button>
                                                        <button className='mt-10 bg-secondary hover:bg-primary p-2 px-3 text-white whitespace-nowrap rounded w-full flex justify-center'>
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
        </>
    )
}
