"use client"
import React from 'react';
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ArrowLongRightIcon, PlusCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

const plans = [
    {
        name: 'Know Your Scheme',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
    },
    {
        name: 'Register Company',
        ram: '16GB',
        cpus: '8 CPUs',
        disk: '512 GB SSD disk',
    },
    {
        name: 'PAN',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
    },
    {
        name: 'MSME Claimed',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
    },
    {
        name: 'Compliance/Audit',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
    },
    {
        name: 'Other',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
    },
]

const companies = [
    {
        name: 'Dummy Company One',
        logo: '/companies/2.jpg',
        desc: ''
    },
    {
        name: 'Dummy Company Two',
        logo: '/companies/3.jpg',
        desc: ''
    },
    {
        name: 'Dummy Company Three',
        logo: '/companies/4.png',
        desc: ''
    },
]

const KnowYourScheme = ({ setActiveStep, activeStep }) => {
    const [selected, setSelected] = useState(plans[0]);

    function CheckIcon(props) {
        return (
            <svg viewBox="0 0 24 24" fill="none" {...props}>
                <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
                <path
                    d="M7 13l3 3 7-7"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        )
    }
    return (
        <div className='container mx-auto'>
            <div className="mx-auto w-full max-w-full mt-20 mb-20 ">
                <div className='section-title text-center'>
                    <h6 className='font-semibold  text-sm xl:text-xl'>Companies</h6>
                    <h4 className='font-bold text-primary text-3xl xl:text-4xl mt-2'>Welcome Lorem,  <span className=' text-blue'>Here is the list of your companies!</span></h4>
                </div>
                <div className='flex justify-end mt-10'>
                    <button onClick={()=>{setActiveStep(0)}} className='mr-1  whitespace-nowrap bg-primary hover:bg-secondary text-white rounded-lg p-2 lg:p-3 px-4 text-[16px] flex items-center'>
                        <PlusCircleIcon className="w-6 mr-2" style={{ height: '25px' }} aria-hidden="true" />
                        Add Company
                    </button>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5'>
                    {
                        companies.map((item, index) => {
                            return (
                                <div className='bg-white rounded-[20px] py-5 px-5 ' key={index}>
                                    <a href="#" className="flex flex-col items-center  md:flex-row ">
                                        <div className='bg-gray h-[130px] w-[250px] flex items-center justify-center rounded-lg'>
                                            <img className=" rounded-t-lg md:rounded-none " src={item.logo} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-[17px] font-bold tracking-tight ">{item.name}</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                        </div>
                                    </a>
                                    <div className='lg:flex items-center justify-end mt-5'>
                                        <Link href='/know-your-schemes' className='mr-1 mb-0'>
                                            <button className='w-full whitespace-nowrap bg-primary hover:bg-secondary text-white rounded-lg p-2 px-4 text-[14px] flex items-center justify-center'>
                                                Know Your Scheme
                                                <ArrowLongRightIcon className="w-6 ml-2" style={{ height: '25px' }} aria-hidden="true" />
                                            </button>
                                        </Link>
                                        <Link href='/msme-claimed' className='mr-1 mb-0'>
                                            <button className='w-full whitespace-nowrap bg-primary hover:bg-secondary text-white rounded-lg p-2 px-4 text-[14px] flex items-center justify-center'>
                                            MSME Classification
                                                <ArrowLongRightIcon className="w-6 ml-2" style={{ height: '25px' }} aria-hidden="true" />
                                            </button>
                                        </Link>
                                        <Link href='/compliance-audit' className='mr-1 mb-0'>
                                            <button className='w-full whitespace-nowrap bg-primary hover:bg-secondary text-white rounded-lg p-2 px-4 text-[14px] flex items-center justify-center'>
                                            Compliance/Audit
                                                <ArrowLongRightIcon className="w-6 ml-2" style={{ height: '25px' }} aria-hidden="true" />
                                            </button>
                                        </Link>
                                       
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div className="mt-10 border-t pt-10">
                    <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">Services</RadioGroup.Label>
                        <div className="space-y-2 grid grid-cols-2 gap-4">
                            {plans.map((plan, index) => (
                                <div className='grid cols-3' key={index}>
                                    <RadioGroup.Option
                                        key={plan.name}
                                        value={plan}
                                        className={({ active, checked }) =>
                                            `${active
                                                ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                                                : ''
                                            }
                  ${checked ? 'bg-blue text-white' : 'bg-gray'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                        }
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <div className="flex w-full items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="text-sm">
                                                            <RadioGroup.Label
                                                                as="p"
                                                                className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                                    }`}
                                                            >
                                                                {plan.name}
                                                            </RadioGroup.Label>
                                                        </div>
                                                    </div>
                                                    {checked && (
                                                        <div className="shrink-0 text-white">
                                                            <CheckIcon className=" w-6" />
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                </div>
                            ))}
                        </div>
                    </RadioGroup>


                </div> */}
            </div>
            {/* <div className="mt-10">
                <div className='flex justify-end '>
                    {
                        activeStep > 0 &&
                        <button onClick={() => { setActiveStep(0) }} className='mr-3 bg-secondary hover:bg-primary text-white text-[16px] rounded-[40px] px-3 py-3 w-full'>
                            Back
                        </button>
                    }
                    <button onClick={() => { setActiveStep(2) }} className='bg-primary hover:bg-secondary text-white text-[16px] rounded-[40px] px-3 py-3 w-full'>
                        Next
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default KnowYourScheme