"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { ToastContainer, toast } from 'react-toastify';
import { validEmail, validPassword } from '../../components/regex';

const UserRegister = ({ handleBack }) => {
    const [isMobileValid, setIsMobileValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isPasswordView, setIsPasswordView] = useState(true);
    const [userData, setData] = useState(
        {
            name: "",
            email: "",
            mobile: "",
            referral:"",
        }
    )
    const [buttonLoader, setButtonLoader] = useState(false);

    const handlePasswordView = () => {
        setIsPasswordView(!isPasswordView);
    }

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
    const onChangeReferral = (e) => {
        setData(prevState => ({
            ...prevState,
            referral: e.target.value
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
        // const encodedString = Buffer.from(JSON.stringify(userData)).toString('base64');
        // let myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        // const str1 = JSON.stringify({ i: "456", u: "vickcy", c: "999888" })
        // const str2 = JSON.stringify(str1);

        // const data = {
        //     "i": "456",
        //     "d": str2,
        //     "p": encodedString
        // }

        // let requestOptions = {
        //     'Content-type': 'application/x-www-form-urlencoded',
        //     'Content-Length': '<calculated when request is sent>',
        //     'Host': '<calculated when request is sent>',
        //     'Accept': '*/*',
        //     'Accept-Encoding': 'gzip, deflate, br',
        //     'Connection': 'keep-alive'
        // };

        // setButtonLoader(true);
        // getApiData(endPoint, 'post', data, requestOptions)
        //     .then((result) => {
        //         if(result.e) {
        //             setButtonLoader(false);
        //             const decodedStringAtoB = atob(result.r);
        //             console.log('decodedStringAtoB', decodedStringAtoB)
        //             toast.error(decodedStringAtoB ? decodedStringAtoB : 'Something wents wrong.');

        //         } else {
        //             setButtonLoader(false);
        //             const decodedStringToken = atob(result.r);
        //             const res =  JSON.parse(decodedStringToken) ;
        //             console.log('AccessToken', decodedStringToken);
        //             console.log('AccessToken 1', res?.authToken);

        //             dispatch(setAccessToken(res || ""));
        //             toast.success("LogIn Successfully. Continue on Lawyer Onboarding Details.");
        //             setTimeout(() => {
        //                 navigate("/lawyer-on-boarding")
        //             }, 1000);
        //         }
        //     })
        //     .catch((err) => {
        //         console.log("Error ====>", err);
        //         setButtonLoader(false);
        //     });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userData.name) {
            toast.warn("Name is required.")
        } else if (!userData.email) {
            toast.warn("Email address is required.")
        } else if (!userData.password) {
            toast.warn("Password is required.")
        } else {
            if (!isMobileValid && !isPasswordValid) {
                toast.success("Success")
                // callApi();
            }
        }

    }

    return (
        <>
            <div className=" max-w-xl">
                <div className='border-b pb-5'>
                    <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 ">
                        User Signup
                    </h2>
                    <p className="mt-3 text-center text-sm text-gray-900">
                        Or You have already account ? {' '}
                        <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500 text-blue'>
                            Login Here
                        </Link>
                    </p>
                </div>
                <div className="mt-8 space-y-5">
                    <div className="-space-y-px rounded-md ">
                        <div className="group relative w-72 md:w-80 lg:w-96 relative">
                            <label htmlFor="0" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Full Name*</label>
                            <input
                                id="0"
                                type="text"
                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                onChange={onChangeName}
                                placeholder="Enter Full Name"
                            />
                        </div>
                    </div>

                    <div className="-space-y-px rounded-md ">
                        <div className="group relative w-72 md:w-80 lg:w-96 relative">
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
                    
                    <div className="-space-y-px rounded-md ">
                        <div className="group relative w-72 md:w-80 lg:w-96">
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
                        <div className="group relative w-72 md:w-80 lg:w-96">
                            <label htmlFor="2" className=" pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Enter Referral Code</label>
                            <input id="2"
                                type="text"
                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                onChange={onChangeReferral}
                                placeholder="Enter Referral Code"
                            />
                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-center mt-[50px]'>
                    <button onClick={handleBack} className='mr-5 bg-primary hover:bg-secondary text-white text-[16px] rounded-[40px] px-8 py-3 w-full'>
                        Back
                    </button>
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
                                Generate OTP
                            </button>
                    }
                </div>
            </div>
        </>
    )
}

export default UserRegister
