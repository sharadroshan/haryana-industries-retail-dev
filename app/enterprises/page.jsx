"use client"

import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IncentivesModal } from '../components/modals/incentives';
import { apiCall } from '@/utils/apiHelper';
import { Navbar } from '../components/navbar';
import { Addcompany } from '../components/modals/addcompany';
import { Loading } from '../components/loading';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { PrimaryOutlineButton } from '../components/buttons';
import { Footer } from '../components/footer';

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [data, setData] = useState([]);
    const [isOpenIncentiveModal, setIsOpenIncentiveModal] = useState(false);
    const [isSelectedEnterprise, setIsSelectedEnterprise] = useState({});
    const [isRefresh, setIsRefresh] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const closeIncentiveModal = () => {
        setIsOpenIncentiveModal(false)
    }

    function openIncentiveModal(value) {
        setIsOpenIncentiveModal(true);
        setIsSelectedEnterprise(value)
    }

    useEffect(() => {
        fetchData();
    }, [isRefresh]);


    async function fetchData() {
        const response = await apiCall("hi-enterprises", "GET", null);
        if (response.status == undefined) {
            // errorToast("Invalid", "Invalid User ID or password");
            return
        }
        const responseJSON = await response.json();
        setTimeout(() => {
            setIsLoadingData(false);
        }, 1000);
        if (responseJSON) {
            setData(responseJSON);
            if (responseJSON.length == 0) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        }
    }

    return (
        <>
            <Navbar />
            <div className='container mx-auto my-5 pb-20 px-5'>
                <div className="grid lg:grid-cols-2 grid-cols-2 gap-4 items-start mb-5">
                    <div className='section-title text-left'>
                        <h4 className='font-medium text-secondary text-lg lg:text-xl mt-2'>Enterprises</h4>
                    </div>
                    <div className='flex justify-end items-center w-full '>
                        <button className='flex items-center justify-center text-primary border border-primary rounded-md py-2 px-2 text-sm lg:px-5 lg:py-3 lg:text-md font-medium cursor-pointer' onClick={() => { openModal() }}><PlusIcon className='w-5 h-[20px] mr-1' /> Create</button>
                    </div>
                </div>

                {
                    isLoadingData ?
                        <Loading />
                        :
                        data?.length === 0 ?
                            <div className='text-center'>
                                <h5 className='text-xl text-center font-semibold mb-5'>No Enterprises Found.</h5>
                                <button className='bg-primary text-white rounded-lg py-3 px-5 font-semibold cursor-pointer m-auto' onClick={() => { openModal() }}>Add Enterprise</button>
                            </div>
                            :
                            <>
                                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                                    {
                                        data?.map((item, index) => {
                                            return (
                                                <div className='bg-white rounded-lg p-4 ' key={index}>
                                                    <div className='flex items-center border-b border-gray400 pb-3'>
                                                        <div className='w-[50px] h-[50px] rounded-full bg-gray400 mr-3'> </div>
                                                        <h4 className='font-semibold'>{item.name}</h4>
                                                    </div>
                                                    <div className='py-2'>
                                                        <h6 className='flex justify-between items-center'><span>MSME Number</span><span>{item.msmeNumber}</span></h6>
                                                    </div>
                                                    <div className='py-0'>
                                                        <h6 className='flex justify-between items-center'><span>Eligibility</span><span>{item.eligibility}</span></h6>
                                                    </div>
                                                    <div className='py-2'>
                                                        <h6 className='flex justify-between items-center'><span>Block</span><span className='bg-green100 border border-green500 text-green500 px-6 rounded'>{item.block}</span></h6>
                                                    </div>
                                                    <div className='flex items-center justify-between mt-3'>
                                                        {/* <button onClick={() => { openIncentiveModal(item) }} className='w-full mr-1 text-center border border-primary  text-primary text-sm rounded-lg py-2 px-5 font-medium cursor-pointer m-auto'>View Schemes</button> */}
                                                        <Link href={{ pathname: '/schemes', query: { eligibility: item.eligibility, block: item.block } }} className='w-full mr-2'>
                                                            <PrimaryOutlineButton name=" View Schemes" className="w-full"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )

                                        })
                                    }
                                </div>
                            </>

                }
            </div>
            <Transition appear show={isOpenIncentiveModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeIncentiveModal}>
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

                    <div className="fixed inset-0 overflow-y-auto " style={{ background: '#0000008a' }}>
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full lg:max-w-4xl transform overflow-hidden rounded-2xl bg-gray300 text-left align-middle shadow-xl transition-all">
                                    <IncentivesModal handleClose={closeIncentiveModal} isSelectedEnterprise={isSelectedEnterprise} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={data?.length === 0 ? openModal : closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto " style={{ background: '#0000008a' }}>
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
                                <Dialog.Panel className="w-full lg:max-w-4xl transform overflow-hidden rounded-2xl bg-white lg:p-6 p-3 text-left align-middle shadow-xl transition-all">
                                    <Addcompany setIsRefresh={setIsRefresh} handleClose={closeModal} data={data} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Footer />
        </>
    )
}
export default Page
