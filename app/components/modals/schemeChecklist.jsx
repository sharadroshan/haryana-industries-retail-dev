"use client"
import React, { useState, useEffect } from 'react';
import { apiCall } from "../../../utils/apiCall";
import { Loading } from '../loading';
import { PrimaryButton, PrimaryOutlineButton } from '../buttons';

export const SchemeChecklistModal = ({ schemeId, handleOpenCallModal, handleClose }) => {
    const [data, setData] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);

    const handleFetchData = async () => {
        const response = await apiCall(`hi-schemes/${schemeId}/checklists`, "GET");
        if (response) {
            const responseJSON = await response?.text();
            const lines = responseJSON.split('NEXT_LINE').map(line => line.trim());
            const numberedLines = lines.map((line, index) => `${index + 1}. ${line}`);
            setData(numberedLines);
            setTimeout(() => {
                setIsLoadingData(false);
            }, 1000);
        } else {
            setIsLoadingData(false);
        }

    }

    useEffect(() => {
        handleFetchData();
    }, []);


    return (
        <div>
            <section className='coponies-section ' >
                <div className=' mx-auto px-5 flex items-center justify-center'>
                    <div className='bg-white w-full rounded-lg'>
                        <div className='section-title text-center mb-5 lg:flex items-center justify-between'>
                            <h4 className='font-semibold text-secondary text-lg xl:text-xl'>Scheme Checklist Details</h4>
                            <div>
                                <PrimaryOutlineButton name="Close" onClick={handleClose} />
                                <PrimaryButton name="Call To Expert" onClick={handleOpenCallModal} className="ml-2 text-md whitespace-nowrap" />
                            </div>
                        </div>
                        <div className='mt-10 mb-20 w-full' >
                            {
                                isLoadingData ?
                                    <Loading />
                                    :
                                    <div >
                                        {data?.map((line, index) => (
                                            <div key={index} className='border-b border-gray400 py-3 text-left'>
                                                <h3>{line}</h3>
                                            </div>
                                        ))}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
