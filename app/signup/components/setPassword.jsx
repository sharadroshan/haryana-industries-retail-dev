import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { EyeIcon, EyeSlashIcon, LockClosedIcon , XCircleIcon} from '@heroicons/react/20/solid';
import { apiCall } from "../../../utils/apiCall";


export const SetPassword = ({ setUserConfirmPassword, data , setIsOpenOtpModal}) => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMatched, setIsPasswordMatched] = useState(false);
    const [isPasswordView, setIsPasswordView] = useState(false);
    const [isConfirmPasswordView, setIsConfirmPasswordView] = useState(false);

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeConfirmPassword = (e) => {
        const { value } = e.target;
        setConfirmPassword(value);
        setUserConfirmPassword(value);
        if (value === password) { 
            setIsPasswordMatched(true);
        } else {
            setIsPasswordMatched(false);
        }
    }

    const createAccount = async () => {
        const reqBody = {
            "otpDeliveringChannel": "SMS",
            "username": data.mobile,
            "verificationType": "PASSWORD_RESET"
        }
        await apiCall(
            `user-profile/send-otp-non-logged-in`,
            "POST",
            reqBody,
        )
            .then(response => {
                setIsButtonLoading(false);

                if (response.status == undefined) {
                    toast.error("Invalid User ID or password");
                    return;
                }
                if (response.status !== 200) {
                    toast.error("Invalid User ID or password");
                    return;
                } else if (response.status === 200) {
                    toast.success("OTP sent to your mobile please check");
                    setIsOpenOtpModal(true);
                }
            }).then(data => {
                console.log('data ==>', data)
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsButtonLoading(true);

        if (!password) {
            toast.warn("Password is required.");
            setIsButtonLoading(false);
        } else if (!confirmPassword) {
            toast.warn("Confirm Password is required.");
            setIsButtonLoading(false);
        } else if (password !== confirmPassword) {
            toast.warn("Confirm Password Not Matched.");
            setIsButtonLoading(false);
        } else if (confirmPassword !== password) {
            toast.warn("Password Not Matched.");
            setIsButtonLoading(false);
        } else {
            createAccount();
        }
    }

    return (
        <div>
            <div className="w-full relative">
                <div className='border-b pb-5'>
                    <h2 className="lg:mt-6 text-3xl lg:text-5xl font-bold text-primary">
                        Set Your Password
                    </h2>
                    <p className="mt-10 text-sm ">
                        Or You have already account ? {' '}
                        <Link href='/login' className='font-medium text-indigo-600 hover:text-indigo-500 text-blue'>
                            Login Here
                        </Link>
                    </p>
                </div>
                <div className="mt-8 space-y-3 lg:space-y-5">
                    <div className="-space-y-px rounded-md ">
                        <div className="group relative">
                            <label htmlFor="password" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Password*</label>
                            <div>
                                <input
                                    id="password"
                                    type={isPasswordView ? "test" : "password"}
                                    className="peer h-12 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                    placeholder="Enter Password"
                                    onChange={handleChangePassword}
                                />
                                {
                                    isPasswordView ?
                                        <EyeSlashIcon onClick={() => { setIsPasswordView(false) }} className='w-5 h-5 absolute right-2 top-1 text-primary cursor-pointer' style={{ zIndex: '9' }} />
                                        :
                                        <EyeIcon onClick={() => { setIsPasswordView(true) }} className='w-5 h-5 absolute right-2 top-1 text-primary cursor-pointer' style={{ zIndex: '9' }} />
                                }
                            </div>
                        </div>
                    </div>

                    <div className="-space-y-px rounded-md ">
                        <div className="group relative">
                            <label htmlFor="confirmPassword" className="block w-full pb-1 text-sm font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Confirm Password*</label>
                            <div className='relative'>
                                <input
                                    id="confirmPassword"
                                    type={isConfirmPasswordView ? "text" : "password"}
                                    className="peer h-12 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out border text-blue text-[14px]"
                                    placeholder="Enter Confirm Password"
                                    onChange={handleChangeConfirmPassword}
                                />
                                {
                                    isConfirmPasswordView ?
                                        <EyeSlashIcon onClick={() => { setIsConfirmPasswordView(false) }} className='w-5 h-3 absolute right-2 bottom-0 text-primary cursor-pointer' style={{ zIndex: '9' }} />
                                        :
                                        <EyeIcon onClick={() => { setIsConfirmPasswordView(true) }} className='w-5 h-3 absolute right-2 bottom-0 text-primary cursor-pointer' style={{ zIndex: '9' }} />
                                }
                            </div>

                            {
                                isPasswordMatched &&
                                <p className='text-green text-sm mt-2'>Password & Confirm Password is matched.</p>
                            }
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-[40px]'>
                    {
                        isButtonLoading ?
                            <button disabled
                                className="relative bg-primary hover:bg-primary text-white text-[16px] rounded-[40px] px-3 py-3 w-full btn-disabled"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <XCircleIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Please wait ...
                            </button>
                            :
                            <button
                                onClick={handleSubmit}
                                className='relative bg-primary hover:bg-secondary text-white text-[16px] rounded-[40px] px-3 py-3 w-full'
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
    )
}
