"use client"
import React, { useState, useEffect } from 'react';
import { apiCall } from "../../../utils/apiCall";
import { Loading } from '../loading';
import { PrimaryButton, PrimaryOutlineButton } from '../buttons';

export const SchemeDetailsModal = ({ schemeId, eligibility, block, handleOpenCallModal, handleClose }) => {
    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

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
            <section className='coponies-section ' >
                <div className=' mx-auto px-5 flex items-center justify-center'>
                    <div className='bg-white w-full rounded-lg'>
                        <div className='section-title text-center mb-5 lg:flex items-center justify-between'>
                            <h4 className='font-bold text-secondary text-lg xl:text-xl '>Schemes Details</h4>
                            <div>
                                <PrimaryOutlineButton name="Close" onClick={handleClose} />
                                <PrimaryButton name="Call To Expert" onClick={handleOpenCallModal} className="ml-2 text-md whitespace-nowrap" />
                            </div>
                        </div>
                        <div className=' w-full' >
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
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b whitespace-nowrap'>Apply</th>
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
                                                            <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left  whitespace-nowrap'>
                                                                <PrimaryOutlineButton onClick={handleOpenCallModal} name="Apply Now" className="text-sm whitespace-nowrap" />
                                                            </td>
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
        </div>
    )
}
