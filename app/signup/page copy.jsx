"use client"
import React, { Fragment, useState, useEffect, componentWillUnmount } from 'react';
import { useRouter } from 'next/navigation';
import OtpInput from 'react-otp-input';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';
import { validEmail } from '../components/regex';

const Page = () => {
    const router = useRouter();

    const [otp, setOtp] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isMobileValid, setIsMobileValid] = useState(false);
    const [buttonLoader, setButtonLoader] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [userData, setData] = useState(
        {
            name: "",
            email: "",
            mobile: "",
        }
    )

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let newObject = window?.localStorage.getItem("token");
            const accessToken = JSON.parse(newObject);
            if (accessToken) {
                router.push('/');
            }
        }
       
    }, [])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
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
        if (e.target.value?.length > 3) {
            if (!validEmail.test(userData.email)) {
                setIsEmailValid(true);
            } else {
                setIsEmailValid(false)
            }
        } else {
            setIsEmailValid(false)
        }
    }

    const onChangeMobile = (e) => {
        setData(prevState => ({
            ...prevState,
            mobile: e.target.value
        }));
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
        } else if (!userData.mobile) {
            toast.warn("Mobile number is required.")
        } else if (!userData.email) {
            toast.warn("Email address is required.")
        } else {
            toast.success("Success")
            setIsOpen(true);
        }
    }

    return (
        <>
            <section className='pt-10 pb-10'>
                <div className='container mx-auto px-5'>
                    <div className='flex justify-center align-center'>
                        <div className="flex min-h-full items-center justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white md:w-1/2 rounded-2xl">
                            <div className=" max-w-xl">
                                <div className='border-b pb-5'>
                                    <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 ">
                                        Signup
                                    </h2>
                                    <p className="mt-3 text-center text-sm text-gray-900">
                                        Or You have already account ? {' '}
                                        <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500 text-blue'>
                                            Login Here
                                        </Link>
                                    </p>
                                </div>
                                <div className="mt-8 space-y-3 lg:space-y-5">
                                    <div className="-space-y-px rounded-md ">
                                        <div className="group relative">
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
                                        <div className="group relative">
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
                                        <div className="group relative">
                                            <label htmlFor="2" className=" pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Email Address</label>
                                            <input id="2"
                                                type="email"
                                                className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-blue text-[14px]"
                                                onChange={onChangeEmail}
                                                placeholder="Enter Email Address"
                                            />
                                        </div>
                                        {
                                            isEmailValid &&
                                            <span className="pt-1 text-xs text-red">Invalid email type , Format - example@gmail.com</span>
                                        }
                                    </div>
                                </div>
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
                                                className='bg-primary hover:bg-secondary text-white text-[16px] rounded-[40px] px-3 py-3 w-full'
                                            >
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                                </span>
                                                Generate OTP
                                            </button>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={openModal}>
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

                    <div className="fixed inset-0 overflow-y-auto " style={{ background: '#f2f2f2' }}>
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="relative flex  flex-col justify-center overflow-hidden bg-gray-50 lg:py-12">
                                        <div className="relative bg-white lg:px-6 lg:pt-10 lg:pb-10 mx-auto w-full max-w-lg rounded-2xl">
                                            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                                                <div className="flex flex-col items-center justify-center text-center space-y-2">
                                                    <div className="font-semibold text-2xl lg:text-3xl ">
                                                        <h3 className='text-blue'>Mobile OTP Verification</h3>
                                                    </div>
                                                    <div className="flex flex-row text-sm font-medium text-gray-400">
                                                        <p>We have sent a code to your mobile number.</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className='flex justify-center mb-10'>
                                                        <OtpInput
                                                            value={otp}
                                                            onChange={setOtp}
                                                            numInputs={4}
                                                            renderSeparator={<span>-</span>}
                                                            renderInput={(props) => <input {...props} />}
                                                            inputStyle={{ width: '70px', height: '70px', border: '2px solid #2563eb', borderRadius: '13px', fontSize: '23px', fontWeight: '800' }}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col space-y-16">
                                                        <div className="flex flex-col space-y-5">
                                                            <div>
                                                                <Link href='/login'>
                                                                    <button
                                                                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue border-none text-white text-sm shadow-sm"
                                                                    >
                                                                        Verify Account
                                                                    </button>
                                                                </Link>
                                                            </div>

                                                            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                                                <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue" href="#" target="_blank" rel="noopener noreferrer">Resend</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <ToastContainer />
        </>
    )
}

export default Page
