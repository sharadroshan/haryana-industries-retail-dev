"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';

import { TopHeader } from '../components/topheader';
import { Navbar } from "../components/navbar";
import { Breathcumb } from '../components/breathcumb';
import { Footer } from '../components/footer';
import KnowYourScheme from './component/knowYourScheme';
import AddCompany from './component/addCompany';


const page = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNextStep = () => {
        setActiveStep(activeStep + 1)
    }
    const handleBackStep = () => {
        setActiveStep(activeStep - 1)
    }

    return (
        <div >
            <TopHeader />
            <Navbar />
            {/* <Breathcumb
                title='Onboarding' description=''
            /> */}
            <div className="container mx-auto px-5">
                {
                    activeStep == 0 ?
                        <AddCompany setActiveStep={setActiveStep} activeStep={activeStep}/>
                        // <KnowYourScheme setActiveStep={setActiveStep} activeStep={activeStep}/>
                        :
                        <KnowYourScheme setActiveStep={setActiveStep} activeStep={activeStep}/>
                }

                <div className="mt-10">
                    <div className='flex justify-end '>
                        {/* {
                            activeStep > 0 &&
                            <button onClick={handleBackStep} className='mr-3 bg-blue rounded p-3 text-white w-[100px]'>
                                Back
                            </button>
                        } */}
                        {/* <button onClick={handleNextStep} className='bg-blue rounded p-3 text-white w-[100px]'>
                            Next
                        </button> */}
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}

export default page