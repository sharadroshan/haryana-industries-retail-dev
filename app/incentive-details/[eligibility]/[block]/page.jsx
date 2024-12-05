"use client"
import React, { useState, useEffect } from 'react';

import { apiCall } from "../../../../utils/apiCall";

export default function Page({ params, searchParams }) {
    console.log('params', params)
    const dummyData = [
        {
            block: "string",
            cap: "string",
            createDate: "2024-05-06T06:00:02.370Z",
            createdBy: "string",
            deleted: true,
            eligibility: "string",
            extendedPeriodYears: 0,
            id: 0,
            incentive: "string",
            incentiveInExtendedPeriod: "string",
            modifiedBy: "string",
            periodYears: 0,
            productId: 0,
            remarks: "string",
            scheme: {
                checklists: [
                    {
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        description: "string",
                        id: 0,
                        modifiedBy: "string",
                        productId: 0,
                        schemes: [
                            {}
                        ],
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                createDate: "2024-05-06T06:00:02.370Z",
                createdBy: "string",
                deleted: true,
                id: 0,
                modifiedBy: "string",
                name: "string",
                productId: 0,
                schemeDetails: [
                    {
                        block: "string",
                        cap: "string",
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        eligibility: "string",
                        extendedPeriodYears: 0,
                        id: 0,
                        incentive: "string",
                        incentiveInExtendedPeriod: "string",
                        modifiedBy: "string",
                        periodYears: 0,
                        productId: 0,
                        remarks: "string",
                        scheme: {},
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                sourceDetailsId: "string",
                updateDate: "2024-05-06T06:00:02.370Z"
            },
            sourceDetailsId: "string",
            updateDate: "2024-05-06T06:00:02.370Z"
        },
        {
            block: "string",
            cap: "string",
            createDate: "2024-05-06T06:00:02.370Z",
            createdBy: "string",
            deleted: true,
            eligibility: "string",
            extendedPeriodYears: 0,
            id: 0,
            incentive: "string",
            incentiveInExtendedPeriod: "string",
            modifiedBy: "string",
            periodYears: 0,
            productId: 0,
            remarks: "string",
            scheme: {
                checklists: [
                    {
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        description: "string",
                        id: 0,
                        modifiedBy: "string",
                        productId: 0,
                        schemes: [
                            {}
                        ],
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                createDate: "2024-05-06T06:00:02.370Z",
                createdBy: "string",
                deleted: true,
                id: 0,
                modifiedBy: "string",
                name: "string",
                productId: 0,
                schemeDetails: [
                    {
                        block: "string",
                        cap: "string",
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        eligibility: "string",
                        extendedPeriodYears: 0,
                        id: 0,
                        incentive: "string",
                        incentiveInExtendedPeriod: "string",
                        modifiedBy: "string",
                        periodYears: 0,
                        productId: 0,
                        remarks: "string",
                        scheme: {},
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                sourceDetailsId: "string",
                updateDate: "2024-05-06T06:00:02.370Z"
            },
            sourceDetailsId: "string",
            updateDate: "2024-05-06T06:00:02.370Z"
        },
        {
            block: "string",
            cap: "string",
            createDate: "2024-05-06T06:00:02.370Z",
            createdBy: "string",
            deleted: true,
            eligibility: "string",
            extendedPeriodYears: 0,
            id: 0,
            incentive: "string",
            incentiveInExtendedPeriod: "string",
            modifiedBy: "string",
            periodYears: 0,
            productId: 0,
            remarks: "string",
            scheme: {
                checklists: [
                    {
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        description: "string",
                        id: 0,
                        modifiedBy: "string",
                        productId: 0,
                        schemes: [
                            {}
                        ],
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                createDate: "2024-05-06T06:00:02.370Z",
                createdBy: "string",
                deleted: true,
                id: 0,
                modifiedBy: "string",
                name: "string",
                productId: 0,
                schemeDetails: [
                    {
                        block: "string",
                        cap: "string",
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        eligibility: "string",
                        extendedPeriodYears: 0,
                        id: 0,
                        incentive: "string",
                        incentiveInExtendedPeriod: "string",
                        modifiedBy: "string",
                        periodYears: 0,
                        productId: 0,
                        remarks: "string",
                        scheme: {},
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                sourceDetailsId: "string",
                updateDate: "2024-05-06T06:00:02.370Z"
            },
            sourceDetailsId: "string",
            updateDate: "2024-05-06T06:00:02.370Z"
        },
        {
            block: "string",
            cap: "string",
            createDate: "2024-05-06T06:00:02.370Z",
            createdBy: "string",
            deleted: true,
            eligibility: "string",
            extendedPeriodYears: 0,
            id: 0,
            incentive: "string",
            incentiveInExtendedPeriod: "string",
            modifiedBy: "string",
            periodYears: 0,
            productId: 0,
            remarks: "string",
            scheme: {
                checklists: [
                    {
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        description: "string",
                        id: 0,
                        modifiedBy: "string",
                        productId: 0,
                        schemes: [
                            {}
                        ],
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                createDate: "2024-05-06T06:00:02.370Z",
                createdBy: "string",
                deleted: true,
                id: 0,
                modifiedBy: "string",
                name: "string",
                productId: 0,
                schemeDetails: [
                    {
                        block: "string",
                        cap: "string",
                        createDate: "2024-05-06T06:00:02.370Z",
                        createdBy: "string",
                        deleted: true,
                        eligibility: "string",
                        extendedPeriodYears: 0,
                        id: 0,
                        incentive: "string",
                        incentiveInExtendedPeriod: "string",
                        modifiedBy: "string",
                        periodYears: 0,
                        productId: 0,
                        remarks: "string",
                        scheme: {},
                        sourceDetailsId: "string",
                        updateDate: "2024-05-06T06:00:02.370Z"
                    }
                ],
                sourceDetailsId: "string",
                updateDate: "2024-05-06T06:00:02.370Z"
            },
            sourceDetailsId: "string",
            updateDate: "2024-05-06T06:00:02.370Z"
        },
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleFetchData = async () => {
        const response = await apiCall(`hi-schemes/scheme-details?schemeId=${'1'}&eligibility=${'MICRO'}&block=${'A'}`, "GET");
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
            <section className='coponies-section py-10  xl:pt-10 xl:pb-40 mt-0 ' >
                <div className='container mx-auto px-5 lg:flex items-center justify-center'>
                    <div className='bg-white rounded-lg lg:p-5 p-3'>
                        <div className='section-title text-center lg:mb-10'>
                            <h4 className='font-bold text-secondary text-xl xl:text-2xl mt-2'>Incentive Details</h4>
                        </div>
                        <div className='lg:mt-10 mt-5 w-full' >
                            <div className='overflow-x-scroll lg:overflow-auto'>
                                <table className='w-full border border-gray500'>
                                    <thead>
                                        <tr>
                                            <th className='font-medium bg-primary py-2 px-4 text-left text-white border-b'>Incentive</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-right text-white border-b'>Cap</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-right text-white border-b'>Block</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-right text-white border-b'>Eligibility</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-right text-white border-b whitespace-nowrap'>Extended Period</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-right text-white border-b whitespace-nowrap'>Period Years</th>
                                            <th className='font-medium bg-primary py-2 px-4 text-right text-white border-b'>Remark</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dummyData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-left whitespace-nowrap'>Dummy Incentive</td>
                                                        <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-right'>Cap</td>
                                                        <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-right whitespace-nowrap'>A Block</td>
                                                        <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-right'>Medium</td>
                                                        <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-right'>30 Days</td>
                                                        <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-right'>5 Years</td>
                                                        <td className='border-b border-gray500 font-medium py-4 px-4 text-sm text-right'>Verify</td>
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