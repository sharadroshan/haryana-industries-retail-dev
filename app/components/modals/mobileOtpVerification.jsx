import React, { useState } from 'react';
import { toast } from 'react-toastify';
import OtpInput from 'react-otp-input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { apiCall } from "../../../utils/apiCall";



export const MobileOtpVerification = ({ type, handleClose, data, userConfirmPassword }) => {
    const router = useRouter();
    const [otp, setOtp] = useState('');

    const verifyMobileOTP = async function () {
        if (type === "mobile") {
            const reqBody = {
                "newPassword": userConfirmPassword,
                "otp": otp,
                "otpDeliveringChannel": "SMS",
                // "otp": '123456',
                // "otpDeliveringChannel": "EMAIL",
                "username": data.mobile
            }

            await apiCall("user-profile/reset-password-with-otp", "POST", reqBody).then(response => {
                if (response.status !== 200) {
                    toast.error("OTP is invalid.");
                    return;
                } else if (response.status === 200) {
                    toast.success("Password Changed Successfully!");
                    router.push('/login');
                    handleClose();
                    // clearAccessToken()
                } else {
                    toast.error("Password cannot be the same as last one!");
                }
            })
        }
    }

    const CloseModal = () => {
        handleClose();
    }

    return (
        <div>
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
                                    numInputs={6}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                    inputStyle={{ width: '70px', height: '70px', border: '2px solid #2563eb', borderRadius: '13px', fontSize: '23px', fontWeight: '800' }}
                                />
                            </div>
                            <div className="flex flex-col space-y-16">
                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button
                                            onClick={verifyMobileOTP}
                                            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue border-none text-white text-sm shadow-sm"
                                        >
                                            Verify Account
                                        </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue mr-1" href="#" target="_blank" rel="noopener noreferrer">Resend </a> Or
                                        <span onClick={CloseModal} className='text-primary font-semibold cursor-pointer'>Close Screen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
