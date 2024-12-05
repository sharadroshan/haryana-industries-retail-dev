"use client"
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'
import { apiCall } from "../../utils/apiCall";
import { Loading } from '../components/loading';
import { PrimaryButton, PrimaryOutlineButton} from '../components/buttons';
import { Navbar } from '../components/navbar';


const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const schemeId = searchParams.get('schemeId');
    const eligibility = searchParams.get('eligibility');
    const block = searchParams.get('block');
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
            <Navbar />
            <section className='coponies-section py-10  xl:pt-10 xl:pb-40 mt-0 ' >
                <div className='xl:container mx-auto px-5 flex items-center justify-center'>
                    <div className='bg-white w-full text-center rounded-lg p-5'>
                        <div className='section-title text-center mb-10 lg:flex items-center justify-between'>
                            <h4 className='font-bold text-secondary text-xl xl:text-2xl '>Schemes Checklist</h4>
                            <div>
                                <PrimaryOutlineButton name="Call To Expert" className="text-md whitespace-nowrap" />
                                <PrimaryButton name="Go Back" onClick={() => router.back()} className="ml-2 text-md whitespace-nowrap" />
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

export default Page