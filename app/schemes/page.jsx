"use client"
import React, { Fragment, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';

import { apiCall } from "../../utils/apiCall";
import { Loading } from '../components/loading';
import { PrimaryButton, PrimaryOutlineButton } from '../components/buttons';
import Image from 'next/image';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { SchemeDetailsModal } from '../components/modals/schemeDetails';
import { SchemeChecklistModal } from '../components/modals/schemeChecklist';
import { CallRequestModal } from '../components/modals/callRequest';

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const eligibility = searchParams.get('eligibility');
    const block = searchParams.get('block');
    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [isOpenDetailsModal, setIsOpenDetailsModal] = useState(false);
    const [isOpenChecklistModal, setIsOpenChecklistModal] = useState(false);
    const [isOpenCallModal, setIsOpenCallModal] = useState(false);
    const [selectedSchemeId, setSelectedSchemeId] = useState(0);


    const handleFetchData = async () => {
        const response = await apiCall(`hi-schemes/id-name-list?eligibility=${eligibility}&block=${block}`, "GET");
        if (response) {
            const responseJSON = await response?.json();
            setData(responseJSON)
            setTimeout(() => {
                setIsLoadingData(false);
            }, 500);
        } else {
            setIsLoadingData(false);
        }

    }

    useEffect(() => {
        handleFetchData();
    }, []);

    function handleOpenDetails(schemeId) {
        setSelectedSchemeId(schemeId);
        setIsOpenDetailsModal(true);
    }

    function handleCloseDetails() {
        setIsOpenDetailsModal(false)
    }

    function handleOpenChecklist(schemeId) {
        setSelectedSchemeId(schemeId);
        setIsOpenChecklistModal(true);
    }

    function handleCloseChecklist() {
        setIsOpenChecklistModal(false)
    }

    function handleOpenCallModal() {
        setIsOpenCallModal(true);
    }

    function handleCloseCallModal() {
        setIsOpenCallModal(false)
    }


    return (
        <div>
            <Navbar />
            <section className='coponies-section py-5 xl:pb-20 mt-0 ' >
                <div className='xl:container mx-auto px-5 flex items-center justify-center'>
                    <div className='w-full rounded-lg p-5'>
                        <div className='section-title text-center lg:flex items-center justify-between'>
                            <h4 className='font-semibold text-secondary text-lg xl:text-xl '>Schemes Details</h4>
                            <div>
                                <PrimaryOutlineButton name="Call To Expert" className="text-md whitespace-nowrap" onClick={handleOpenCallModal} />
                                <PrimaryButton name="Go Back" onClick={() => router.back()} className="ml-2 text-md whitespace-nowrap" />
                            </div>
                        </div>
                        <div className='mt-5 w-full' >
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                                {
                                    isLoadingData ?
                                        <div className='col-span-4'>
                                            <Loading />
                                        </div>
                                        :
                                        data?.length === 0 ?
                                            <div className='col-span-4'>
                                                <div className='my-20 text-center '>
                                                    <h4 className=' text-xl'>No Record Found.</h4>
                                                </div>
                                            </div>
                                            :
                                            data?.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <div className='relative service-card h-[200px] shadow p-3 rounded-xl bg-white mb-3 p-5 rounded'>
                                                            <div className='flex items-start justify-between w-full'>
                                                                <Image
                                                                    src="/svgIcons/offer.svg"
                                                                    width={40}
                                                                    height={30}
                                                                    alt="Picture of the author dd"
                                                                />
                                                                <div className='w-[80%]'>
                                                                    <h4 className='font-medium text-dark text-left text-md text-ellipsis'>{item.name}</h4>
                                                                </div>
                                                            </div>

                                                            <div className='flex items-center mt-6 w-full absolute bottom-5 left-0 px-5'>
                                                                {/* <Link href={{ pathname: '/incentive-details', query: { schemeId: item.id, eligibility: eligibility, block: block } }} className='w-full mr-2'>
                                                                        <button className='border hover:bg-primary p-2 py-1 text-primary hover:text-white  rounded w-full mr-1 flex justify-center'>
                                                                            Details
                                                                        </button>
                                                                    </Link>
                                                                    <Link href={{ pathname: '/incentive-checklist', query: { schemeId: item.id, eligibility: eligibility, block: block } }} className='w-full '>
                                                                        <button className='border hover:bg-primary p-2 py-1 text-primary hover:text-white  rounded w-full mr-1 flex justify-center'>
                                                                            Checklists
                                                                        </button>
                                                                    </Link> */}
                                                                <button onClick={() => { handleOpenDetails(item.id) }} className='border hover:bg-primary p-2 py-1 text-primary hover:text-white rounded w-full mr-1 flex justify-center'>
                                                                    Details
                                                                </button>
                                                                <button onClick={() => { handleOpenChecklist(item.id) }} className='border hover:bg-primary p-2 py-1 text-primary hover:text-white rounded w-full mr-1 flex justify-center'>
                                                                    Checklists
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

            <Transition appear show={isOpenDetailsModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleCloseDetails}>
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
                        <div className="flex min-h-full items-start justify-center lg:mt-20 p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white lg:p-5 text-left align-middle shadow-xl transition-all">
                                    <SchemeDetailsModal schemeId={selectedSchemeId} eligibility={eligibility} block={block} handleOpenCallModal={handleOpenCallModal} handleClose={handleCloseDetails} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Transition appear show={isOpenChecklistModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleCloseChecklist}>
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
                        <div className="flex min-h-full items-start justify-center lg:mt-20 p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white lg:p-5 text-left align-middle shadow-xl transition-all">
                                    <SchemeChecklistModal schemeId={selectedSchemeId} handleOpenCallModal={handleOpenCallModal} handleClose={handleCloseChecklist} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Transition appear show={isOpenCallModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleCloseCallModal}>
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
                        <div className="flex min-h-full items-start justify-center lg:mt-20 p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white lg:p-5 text-left align-middle shadow-xl transition-all">
                                    <CallRequestModal handleClose={handleCloseCallModal} />
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