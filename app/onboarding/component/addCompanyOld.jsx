"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { LockClosedIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { validEmail, validPassword } from '../../components/regex';

const AddCompanyOld = ({ setActiveStep, activeStep }) => {
    const [inputFields, setInputFields] = useState([
        { name: '', name: '', email: '', mobile: '' }
    ])
    const [isMobileValid, setIsMobileValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordView, setIsPasswordView] = useState(true);
    const [userData, setData] = useState(
        {
            name: "",
            partnerName: "",
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

    const onChangePartnerName = (e) => {
        setData(prevState => ({
            ...prevState,
            partnerName: e.target.value
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

        if (e.target.value?.length > 3) {
            if (!validEmail.test(userData.email)) {
                setIsMobileValid(true);
            } else {
                setIsMobileValid(false)
            }
        } else {
            setIsMobileValid(false)
        }
    }

    const callApi = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userData.name) {
            toast.warn("Name is required.")
        } else if (!userData.email) {
            toast.warn("Email address is required.")
        } else if (!userData.mobile) {
            toast.warn("Mobile number is required.")
        } else {
            setActiveStep(1)
        }

    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    const addFields = () => {
        let newfield = { name: '', age: '' }
        setInputFields([...inputFields, newfield])
    }
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

    const handleSubmitNew = () => {
        console.log(inputFields)
    }

    return (
        <>
            <div className="mx-auto w-full max-w-3xl mt-20 mb-20 bg-white rounded-[20px] py-10 px-10 ">
                <div className='border-b pb-5'>
                    <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 ">
                        Add Company
                    </h2>
                </div>
                <div className='flex justify-end mb-5'>
                    <button
                        className='bg-green hover:bg-primary text-white text-[16px] rounded-[10px] px-4 py-1 mt-4 flex items-center'
                        onClick={addFields}
                    >
                        <PlusCircleIcon className="h-2 w-5 text-white mr-2" aria-hidden="true" />
                        Add More Company
                    </button>
                </div>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <div className="mt-8 space-y-5">
                                <div className="-space-y-px rounded-md ">
                                    <div className="group relative  relative">
                                        <label htmlFor="0" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Firm's Name*</label>
                                        <input
                                            id="0"
                                            type="text"
                                            name='name'
                                            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                            placeholder="Enter Firm's Name"
                                            value={input.name}
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </div>
                                </div>

                                <div className="-space-y-px rounded-md ">
                                    <div className="group relative ">
                                        <label htmlFor="2" className=" pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email Address</label>
                                        <input id="2"
                                            type="email"
                                            name="email"
                                            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                            placeholder="Enter Email Address"
                                            value={input.email}
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </div>
                                </div>

                                <div className="-space-y-px rounded-md ">
                                    <div className="group relative  relative">
                                        <label htmlFor="2" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Mobile</label>
                                        <input
                                            id="2"
                                            type="text"
                                            name="mobile"
                                            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                            placeholder="Enter Mobile Number"
                                            value={input.mobile}
                                            onChange={event => handleFormChange(index, event)}
                                        />
                                    </div>
                                </div>
                            </div>
                            {
                                inputFields?.length > 1 &&
                                <button className='bg-red hover:bg-primary text-white text-[16px] rounded-[10px] px-4 py-1 mt-4 flex items-center'
                                    onClick={() => removeFields(index)}>
                                    <TrashIcon className="h-2 w-5 text-white mr-2" aria-hidden="true" />
                                    Remove
                                </button>
                            }

                        </div>
                    )
                })}


                <div className='flex items-center justify-center mt-[50px]'>
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
                                className='bg-secondary hover:bg-primary text-white text-[16px] rounded-[40px] px-3 py-3 w-full'
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Send Request
                            </button>
                    }
                    {/* <button onClick={handleSubmitNew}> Submit</button> */}

                </div>
            </div>
        </>
    )
}

export default AddCompanyOld;
