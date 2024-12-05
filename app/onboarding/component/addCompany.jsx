"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';

const AddCompany = ({ setActiveStep, activeStep }) => {
    const [userData, setData] = useState(
        {
            name: "",
            email: "",
            mobile: "",
        }
    )
    const [buttonLoader, setButtonLoader] = useState(false);

    const onChangeName = (e) => {
        setData(prevState => ({
            ...prevState,
            name: e.target.value
        }));
    }

    const onChangeEmail = (e) => {
        setData(prevState => ({
            ...prevState,
            email: e.target.value
        }));
    }
    const onChangeMobile = (e) => {
        setData(prevState => ({
            ...prevState,
            mobile: e.target.value
        }));
    }

    const callApi = () => {
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userData.name) {
            toast.warn("Firm's Name is required.")
        } else if (!userData.email) {
            toast.warn("Email address is required.")
        } else if (!userData.mobile) {
            toast.warn("Mobile number is required.")
        } else {
            setActiveStep(1)
        }

    }

    return (
        <>
            <div className="mx-auto w-full max-w-3xl mt-5 lg:mt-20 mb-5 lg:mb-20 bg-white rounded-[20px] py-10 Lg:px-10 px-5">
                <div className='border-b pb-5'>
                    <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 ">
                        Add Company
                    </h2>
                </div>
                
                <div className="mt-8 space-y-5">
                    <div className="-space-y-px rounded-md ">
                        <div className="group relative  relative">
                            <label htmlFor="0" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Firm's Name*</label>
                            <input
                                id="0"
                                type="text"
                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                onChange={onChangeName}
                                placeholder="Enter Firm's Name"
                            />
                        </div>
                    </div>

                    <div className="-space-y-px rounded-md ">
                        <div className="group relative ">
                            <label htmlFor="2" className=" pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email Address</label>
                            <input id="2"
                                type="email"
                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                onChange={onChangeEmail}
                                placeholder="Enter Email Address"
                            />
                        </div>
                    </div>

                    <div className="-space-y-px rounded-md ">
                        <div className="group relative  relative">
                            <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Mobile</label>
                            <input
                                id="2"
                                type={"number"}
                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                onChange={onChangeMobile}
                                placeholder="Enter Mobile Number"
                            />
                        </div>
                    </div>

                    {/* <div>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-black ">Select Constitution*</label>
                        <select id="countries" className=" border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 ">
                            <option value="individual">Individual</option>
                            <option value="company">Company</option>
                            <option value="firm">Firm/Lp</option>
                        </select>
                    </div> */}

                    {/* <div>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-black ">Select Profession*</label>
                        <select id="countries" className="border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 ">
                            <option value="accountant">Charted Accountant</option>
                            <option value="secretary">Company Secretary</option>
                            <option value="lawyer">Lawyer</option>
                            <option value="others">Others</option>
                        </select>
                    </div> */}
                </div>
                <div className='flex items-center justify-center mt-[50px]'>
                {/* <button onClick={setActiveStep(0)} className='mr-5 bg-primary hover:bg-secondary text-white text-[16px] rounded-[40px] px-8 py-3 w-full'>
                    Back
                </button> */}
                {
                    buttonLoader ?
                        <button disabled
                            className="bg-gray hover:bg-gray text-white text-[16px] rounded-[40px] px-3 py-3 w-full btn-disabled"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <XCircleIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Please wait ...
                        </button>
                        :
                        <button
                            onClick={handleSubmit}
                            className='bg-primary hover:bg-secondary text-white text-[16px] rounded-[40px] px-3 py-3 w-full'
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Send Request
                        </button>
                }
            </div>
            </div>
        </>
    )
}

export default AddCompany;
