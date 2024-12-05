"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { apiCall } from "../../../utils/apiCall";
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Loading } from '../loading';

export const IncentivesModal = ({ handleClose, isSelectedEnterprise }) => {

    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    const handleFetchData = async () => {
        const response = await apiCall(`hi-schemes/id-name-list?eligibility=${isSelectedEnterprise.eligibility}&block=${isSelectedEnterprise.block}`, "GET");
        if (response) {
            const responseJSON = await response?.json();
            setData(responseJSON)
            setTimeout(() => {
                setIsLoadingData(false);
            }, 1000);
        } else {
            setTimeout(() => {
                setIsLoadingData(false);
            }, 1000);
        }

    }

    useEffect(() => {
        handleFetchData();
    }, [])


    return (
        <div>
            <section className='coponies-section py-5 ' >
                <div className='xl:container mx-auto px-5'>
                    <div className='border-b border-gray500 pb-4'>
                        <div className='flex justify-between items-center'>
                            <div className='section-title text-left col-span-2'>
                                <h4 className='font-bold text-primary text-xl xl:text-2xl '>Schemes</h4>
                            </div>
                            <XMarkIcon onClick={handleClose} className='w-7 h-2 text-primary hover:text-black cursor-pointer' />
                        </div>
                    </div>

                    <div className='mt-10' >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                            {
                                isLoadingData ?
                                    <div className='col-span-2'>
                                        <Loading />
                                    </div>
                                    :
                                    data?.length === 0 ?
                                        <div className='col-span-3'>
                                            <div className='my-20 text-center '>
                                                <h4 className=' text-xl'>No Record Found.</h4>
                                            </div>
                                        </div>
                                        :
                                        data?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className='service-card shadow p-3 rounded-xl bg-white mb-3 p-2 rounded'>
                                                        <div className='flex items-start justify-between w-full'>
                                                            <div>
                                                                <h4 className='font-semibold text-primary text-left text-md'>{item.name}</h4>
                                                            </div>
                                                            <Image
                                                                src="/svgIcons/offer.svg"
                                                                width={30}
                                                                height={20}
                                                                alt="Picture of the author dd"
                                                            />
                                                        </div>
                                                        <div className='flex items-center mt-6'>
                                                            <Link href={{ pathname: '/incentive-details', query: { schemeId: item.id , eligibility: isSelectedEnterprise.eligibility, block: isSelectedEnterprise.block } }}  className='w-full mr-2'>
                                                                <button className='border hover:bg-primary p-2 py-1 text-primary hover:text-white  rounded w-full mr-1 flex justify-center'>
                                                                    Details
                                                                </button>
                                                            </Link>
                                                            <Link href={{ pathname: '/incentive-checklist', query: { schemeId: item.id , eligibility: isSelectedEnterprise.eligibility, block: isSelectedEnterprise.block } }}  className='w-full mr-2'>
                                                                <button className='border hover:bg-primary p-2 py-1 text-primary hover:text-white  rounded w-full mr-1 flex justify-center'>
                                                                    Checklists
                                                                </button>
                                                            </Link>
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
        </div>
    )
}
