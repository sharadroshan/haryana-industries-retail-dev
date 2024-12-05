"use client"
import React, { Fragment, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react';

import { apiCall } from "../../utils/apiCall";
import { Loading } from '../components/loading';
import { PrimaryButton, PrimaryOutlineButton } from '../components/buttons';
import { ConfirmRequestModal } from '../components/modals/confirmRequest';

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const schemeId = searchParams.get('schemeId');
    const eligibility = searchParams.get('eligibility');
    const block = searchParams.get('block');
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleFetchData = async () => {
        const response = await apiCall(`hi-schemes/scheme-details?schemeId=${schemeId}&eligibility=${eligibility}&block=${block}`, "GET");
        if (response) {
            const responseJSON = await response?.json();
            setData(responseJSON)
            setTimeout(() => {
                setIsLoadingData(false);
            }, 1000);
        } else {
            setIsLoadingData(false);
        }

    }

    useEffect(() => {
        handleFetchData();
    }, [])


    return (
        <div>
            <section className='coponies-section py-10  xl:pt-10 xl:pb-40 mt-0 ' >
                <div className='xl:container mx-auto px-5 flex items-center justify-center'>
                    <div className='bg-white w-full rounded-lg p-5'>
                        <div className='section-title text-center mb-10 lg:flex items-center justify-between'>
                            <h4 className='font-bold text-secondary text-xl xl:text-2xl '>Schemes Details</h4>
                            <PrimaryButton name="Call To Expert" className="text-md whitespace-nowrap" />
                        </div>
                        <div className='mt-10 w-full' >
                            <div>
                                <table className='w-full border border-gray500'>
                                    <thead>
                                        <tr>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Scheme Id</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Eligibility</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Block</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Incentive</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Period Years</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Extended Period Years</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Incentive In Extended Period</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Cap</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b'>Apply</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            isLoadingData ?
                                                <tr>
                                                    <td colspan="8">
                                                        <Loading />
                                                    </td>
                                                </tr>
                                                :
                                                data?.map((item, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left'>{item.schemeId}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left '>{item.eligibility || "NA"}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left '>{item.block || "NA"}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left '>{item.incentive || "NA"}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left '>{item.periodYears ? item.periodYears + " Years" : "NA"}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left '>{item.extendedPeriodYears ? item.extendedPeriodYears + " Years" : "NA"}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left '>{item.incentiveInExtendedPeriod || "NA"}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left  whitespace-nowrap'>{item.cap || "NA"}</td>
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left'><PrimaryOutlineButton name="Apply Now" onClick={openModal} className="text-sm px-2 whitespace-nowrap" /></td>
                                                        </tr>
                                                    )
                                                })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full lg:max-w-xl transform overflow-hidden rounded-2xl bg-white lg:p-6 p-3 text-left align-middle shadow-xl transition-all">
                                    <ConfirmRequestModal />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default Page