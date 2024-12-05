"use client"
import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { TopHeader } from "../components/topheader";
import { Navbar } from "../components/navbar";
import { Footer } from '../components/footer';

import { apiCall } from "../../utils/apiCall";


const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleFetchData = async () => {
    const response = await apiCall(`hi-schemes/id-name-list?eligibility=${'MICRO'}&block=${'A'}`, "GET");
    if (response) {
      const responseJSON = await response?.json();
      setData(responseJSON)
    }

  }

  useEffect(() => {
    handleFetchData();
  }, [])


  return (
    <div>
      <TopHeader />
      <Navbar />

      <section className='coponies-section py-10  xl:pt-10 xl:pb-40 mt-0 ' >
        <div className='xl:container mx-auto px-5'>
          <div className='section-title text-center mb-10'>
            <h4 className='font-bold text-secondary text-2xl xl:text-4xl mt-2'>Incentives</h4>
          </div>
          <div className='grid grid-cols-7 gap-4'>
            <div className='col-span-2'>
              <h4 className='font-medium text-secondary text-md mt-2 lg:whitespace-nowrap'>Enter your MSME number to check your category</h4>
              <input type='text' placeholder='Enter your MSME number' className='h-3 w-full border border-gray500 rounded-lg p-2 px-4 font-medium text-md mt-2 focus:outline-none' />
            </div>
          </div>

          <div className='mt-10' >
            {/* <div className='section-title text-center mb-10'>
              <h4 className='font-bold text-secondary text-3xl xl:text-4xl mt-2'>Block Classification<span className=' text-blue'> </span></h4>
            </div> */}
            <div className="grid grid-cols-4 gap-4 ">
              <div>
                <div className='service-card shadow p-5 rounded-2xl bg-white mb-3 p-2 rounded'>
                  <div className='flex items-start justify-between w-full'>
                    <div>
                      <h4 className='font-bold text-left text-md lg:text-2xl '>A</h4>
                    </div>
                    <Image
                      src="/svgIcons/offer.svg"
                      width={45}
                      height={45}
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

                  </div>
                </div>
              </div>
              <div>
                <div className='service-card shadow p-5 rounded-2xl bg-white mb-3 p-2 rounded'>
                  <div className='flex items-start justify-between w-full'>
                    <div>
                      <h4 className='font-bold text-left text-md lg:text-2xl '>B</h4>
                    </div>
                    <Image
                      src="/svgIcons/offer.svg"
                      width={45}
                      height={45}
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
                  </div>
                </div>
              </div>
              <div>
                <div className='service-card shadow p-5 rounded-2xl bg-white mb-3 p-2 rounded'>
                  <div className='flex items-start justify-between w-full'>
                    <div>
                      <h4 className='font-bold text-left text-md lg:text-2xl '>C</h4>
                    </div>
                    <Image
                      src="/svgIcons/offer.svg"
                      width={45}
                      height={45}
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
                  </div>
                </div>
              </div>
              <div>
                <div className='service-card shadow p-5 rounded-2xl bg-white mb-3 p-2 rounded'>
                  <div className='flex items-start justify-between w-full'>
                    <div>
                      <h4 className='font-bold text-left text-md lg:text-2xl '>D </h4>
                    </div>
                    <Image
                      src="/svgIcons/offer.svg"
                      width={45}
                      height={45}
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='mt-20' >
            <div className="grid grid-cols-3 gap-4 ">
              <div>
                <div className='service-card shadow p-5 rounded-2xl bg-white mb-3 p-2 rounded'>
                  <div className='flex items-start justify-between w-full'>
                    <div>
                      <h4 className='font-bold text-left text-md lg:text-2xl '>Micro</h4>
                    </div>
                    <Image
                      src="/svgIcons/money-hand.svg"
                      width={50}
                      height={50}
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
              </div>
              <div>
                <div className='service-card shadow p-5 rounded-2xl bg-white mb-3 p-2 rounded'>
                  <div className='flex items-start justify-between w-full'>
                    <div>
                      <h4 className='font-bold text-left text-md lg:text-2xl '>Small</h4>
                    </div>
                    <Image
                      src="/svgIcons/money-hand.svg"
                      width={50}
                      height={50}
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
              </div>
              <div>
                <div className='service-card shadow p-5 rounded-2xl bg-white mb-3 p-2 rounded'>
                  <div className='flex items-start justify-between w-full'>
                    <div>
                      <h4 className='font-bold text-left text-md lg:text-2xl '>Medium</h4>
                    </div>
                    <Image
                      src="/svgIcons/money-hand.svg"
                      width={50}
                      height={50}
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
              </div>
            </div>
          </div> */}
        </div>
      </section>
      


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
      <Footer />
    </div>
  )
}

export default Page