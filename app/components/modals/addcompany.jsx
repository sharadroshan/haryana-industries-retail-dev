import React, { useState } from 'react';

import { apiCall } from "../../../utils/apiHelper";
import { PrimaryButton } from '../buttons';

export const Addcompany = ({ setIsRefresh, handleClose, data }) => {

    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [name, setName] = useState('');
    const [msmeNumber, setMsmeNumber] = useState('');
    const [eligibility, setEligibility] = useState('MICRO');
    const [block, setBlock] = useState('A');

    const [isSelectedType, setIsSelectedType] = useState(0);
    const [isSelectedBlock, setIsSelectedBlock] = useState(0);

    const [errors, setErrors] = useState({});

    const getToken = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('token');
        }
    };

    const accessToken = getToken();

    const onChangeName = (e) => {
        const { value } = e.target;
        setName(value);
        if (errors.name) {
            setErrors({ ...errors, name: '' });
        }
    };

    const onChangeMSMENumber = (e) => {
        const { value } = e.target;
        setMsmeNumber(value);
        if (errors.msmeNumber) {
            setErrors({ ...errors, msmeNumber: '' });
        }
    };

    const validateInputs = () => {
        const newErrors = {};
        if (name.trim() === '' || !/^[A-Za-z\s]+$/.test(name)) {
            newErrors.name = "Please enter a valid enterprise name. Only alphabetic characters are allowed.";
        }
        if (msmeNumber.trim() === '' || !/^\d{5}$/.test(msmeNumber)) {
            newErrors.msmeNumber = "Please enter a valid 5-digit MSME number.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleEligibility = (value) => {
        setIsSelectedType(value);
        if (value === 0) {
            setEligibility("MICRO");
        } else if (value === 1) {
            setEligibility("SMALL");
        } else if (value === 2) {
            setEligibility("MEDIUM");
        }
    };

    const handleSelectBlock = (value) => {
        setIsSelectedBlock(value);
        switch (value) {
            case 0:
                setBlock("A");
                break;
            case 1:
                setBlock("B");
                break;
            case 2:
                setBlock("C");
                break;
            case 3:
                setBlock("D");
                break;
            case 4:
                setBlock("E");
                break;
            default:
                setBlock("A");
        }
    };

    const handleSubmit = async () => {
        if (!validateInputs()) return;

        setIsButtonLoading(true);
        handleApiCall();
    };

    const handleApiCall = async () => {
        const reqBody = {
            block,
            eligibility,
            msmeNumber,
            name,
        };
        await apiCall(
            `hi-enterprises`,
            "POST",
            reqBody,
            accessToken
        )
            .then(response => {
                setIsButtonLoading(false);
                if (response?.status !== 200) {
                    handleClose();
                } else {
                    setIsRefresh(true);
                    handleClose();
                }
            });
    };

    return (
        <>
            <div className='border-b pb-5 flex justify-between'>
                <h2 className=" text-center text-xl font-semibold tracking-tight text-primary ">
                    Add Enterprise
                </h2>
            </div>
            <div className="mt-5">
                <div className="grid lg:grid-cols-3 gap-4">
                    <div>
                        <div className="-space-y-px rounded-md">
                            <div className="group relative">
                                <label htmlFor="name" className=" pb-1 text-[13px] font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Enterprise Name*</label>
                                <input id="name"
                                    type="text"
                                    name='name'
                                    className={`peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border ${errors.name ? 'border-red-500' : 'border-gray-500'} text-secondary text-[14px]`}
                                    placeholder="Enter Enterprise Name"
                                    onChange={onChangeName}
                                    value={name}
                                />
                                {errors.name && (
                                    <p className="text-red text-xs mt-1">{errors.name}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-space-y-px rounded-md">
                            <div className="group relative">
                                <label htmlFor="msmeNumber" className="block w-full pb-1 text-[13px] font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"> MSME Number*</label>
                                <input
                                    id="msmeNumber"
                                    type="text"
                                    name='msmeNumber'
                                    className={`peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border ${errors.msmeNumber ? 'border-red-500' : 'border-gray-500'} text-secondary text-[14px]`}
                                    placeholder="Enter MSME Number"
                                    onChange={onChangeMSMENumber}
                                    value={msmeNumber}
                                />
                                {errors.msmeNumber && (
                                    <p className="text-red text-xs mt-1">{errors.msmeNumber}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border p-2 rounded-lg border-gray500 mt-4'>
                    <h4 className=''>Select Block</h4>
                    <div className='grid lg:grid-cols-4 gap-4 mt-4'>
                        <div onClick={() => { handleSelectBlock(0) }} className={`w-full cursor-pointer flex items-center justify-between border rounded py-3 px-3  mb-4 ${isSelectedBlock === 0 ? ' bg-white text-primary font-semibold' : 'border border-gray500 text-gray500 font-medium'}`}>
                            <h6>A</h6>
                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isSelectedBlock === 0 ? ' bg-primary ' : 'bg-gray500'}`}><div className={`w-[8px] h-[8px] rounded-full flex items-center justify-center ${isSelectedBlock === 0 ? 'bg-white ' : 'bg-white'}`}></div></div>
                        </div>
                        <div onClick={() => { handleSelectBlock(1) }} className={`w-full cursor-pointer flex items-center justify-between border rounded py-3 px-3  mb-4 ${isSelectedBlock === 1 ? ' bg-white text-primary font-semibold' : 'border border-gray500 text-gray500 font-medium'}`}>
                            <h6>B</h6>
                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isSelectedBlock === 1 ? ' bg-primary ' : 'bg-gray500'}`}><div className={`w-[8px] h-[8px] rounded-full flex items-center justify-center ${isSelectedBlock === 1 ? 'bg-white ' : 'bg-white'}`}></div></div>
                        </div>
                        <div onClick={() => { handleSelectBlock(2) }} className={`w-full cursor-pointer flex items-center justify-between border rounded py-3 px-3  mb-4 ${isSelectedBlock === 2 ? ' bg-white text-primary font-semibold' : 'border border-gray500 text-gray500 font-medium'}`}>
                            <h6>C</h6>
                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isSelectedBlock === 2 ? ' bg-primary ' : 'bg-gray500'}`}><div className={`w-[8px] h-[8px] rounded-full flex items-center justify-center ${isSelectedBlock === 2 ? 'bg-white ' : 'bg-white'}`}></div></div>
                        </div>
                        <div onClick={() => { handleSelectBlock(3) }} className={`w-full cursor-pointer flex items-center justify-between border rounded py-3 px-3  mb-4 ${isSelectedBlock === 3 ? ' bg-white text-primary font-semibold' : 'border border-gray500 text-gray500 font-medium'}`}>
                            <h6>D</h6>
                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isSelectedBlock === 3 ? ' bg-primary ' : 'bg-gray500'}`}><div className={`w-[8px] h-[8px] rounded-full flex items-center justify-center ${isSelectedBlock === 3 ? 'bg-white ' : 'bg-white'}`}></div></div>
                        </div>
                    </div>
                </div>
                <div className='border p-2 rounded-lg border-gray500 mt-4'>
                    <h4 className=''>Select Eligibility</h4>
                    <div className='grid lg:grid-cols-3 gap-4 mt-4'>
                        <div onClick={() => { handleEligibility(0) }} className={`w-full cursor-pointer flex items-center justify-between border rounded py-3 px-3  mb-4 ${isSelectedType === 0 ? ' bg-white text-primary font-semibold' : 'border border-gray500 text-gray500 font-medium'}`}>
                            <h6>Mirco</h6>
                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isSelectedType === 0 ? ' bg-primary ' : 'bg-gray500'}`}><div className={`w-[8px] h-[8px] rounded-full flex items-center justify-center ${isSelectedType === 0 ? 'bg-white ' : 'bg-white'}`}></div></div>
                        </div>
                        <div onClick={() => { handleEligibility(1) }} className={`w-full cursor-pointer flex items-center justify-between border rounded py-3 px-3  mb-4 ${isSelectedType === 1 ? ' bg-white text-primary font-semibold' : 'border border-gray500 text-gray500 font-medium'}`}>
                            <h6>Small</h6>
                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isSelectedType === 1 ? ' bg-primary ' : 'bg-gray500'}`}><div className={`w-[8px] h-[8px] rounded-full flex items-center justify-center ${isSelectedType === 1 ? 'bg-white ' : 'bg-white'}`}></div></div>
                        </div>
                        <div onClick={() => { handleEligibility(2) }} className={`w-full cursor-pointer flex items-center justify-between border rounded py-3 px-3  mb-4 ${isSelectedType === 2 ? ' bg-white text-primary font-semibold' : 'border border-gray500 text-gray500 font-medium'}`}>
                            <h6>Medium</h6>
                            <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center ${isSelectedType === 2 ? ' bg-primary ' : 'bg-gray500'}`}><div className={`w-[8px] h-[8px] rounded-full flex items-center justify-center ${isSelectedType === 2 ? 'bg-white ' : 'bg-white'}`}></div></div>
                        </div>
                    </div>
                </div>
                {/* Other components (block and eligibility selection) */}
                <div className='flex items-center justify-end mt-[20px]'>
                    {
                        data?.length === 0 ?
                            null
                            :
                            <button
                                onClick={handleClose}
                                className='bg-secondary hover:bg-primary text-white text-[16px] rounded-[10px] px-3 py-2.5 w-[150px] mr-3'
                            >
                                Cancel
                            </button>
                    }
                    {
                        isButtonLoading ?
                            <button disabled
                                className="bg-gray hover:bg-gray text-black text-[16px] rounded-[10px] px-3 py-2.5 w-[150px] btn-disabled"
                            >
                                Please wait ...
                            </button>
                            :
                            <PrimaryButton onClick={handleSubmit} name="Add" />
                    }
                </div>
            </div>
        </>
    );
}
