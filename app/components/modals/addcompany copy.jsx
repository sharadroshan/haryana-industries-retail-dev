import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { PlusCircleIcon, TrashIcon } from '@heroicons/react/20/solid';

export const Addcompany = ({ handleClose }) => {
    const [inputFields, setInputFields] = useState([
        { pan: '', gst: '', income: '', address1: '', address2: '', landmark: '', pincode: '', city: '', state: '', country: '' }
    ])

    const [buttonLoader, setButtonLoader] = useState(false);
    let data = [...inputFields];
    const handleFormChange = (index, event) => {
        data[index][event.target.name] = event.target.value;
    }

    const addFields = () => {
        let newfield = { name: '', age: '' }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (index) => {
        data.splice(index, 1)

    }

    const handleSave = () => {
        setInputFields(data)
    }

    const handleSubmit = () => {
        console.log(inputFields)
    }

    return (
        <>
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

            <div className="fixed inset-0 overflow-y-auto " style={{ background: '#000000c7' }}>
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
                        <Dialog.Panel className="w-full lg:max-w-4xl transform overflow-hidden rounded-2xl bg-white lg:p-6 text-left align-middle shadow-xl transition-all">
                            <div className='border-b pb-5 flex justify-between'>
                                <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-900 ">
                                    Add Enterprise
                                </h2>
                                <button
                                    className='bg-primary hover:bg-secondary text-white text-[16px] rounded-[10px] px-4 py-1 flex items-center mr-3'
                                    onClick={addFields}
                                >
                                    <PlusCircleIcon className="h-2 w-5 text-white mr-2" aria-hidden="true" />
                                    Add More Enterprise
                                </button>
                            </div>
                            {inputFields.map((input, index) => {
                                return (
                                    <div className="mt-5 border border-secondary p-3 rounded-[13px]" key={index}>
                                        <>
                                            <h4 className='font-semibold text-secondary'>Individual Details</h4>
                                            {
                                                input.pan && input.gst && input.income ?
                                                    <div className="grid lg:grid-cols-3 gap-4">
                                                        <div>
                                                            <h4>PAN</h4>
                                                            <h3 className='font-bold text-[18px]'>{input.pan}</h3>
                                                        </div>

                                                        <div>
                                                            <h4>GST Number</h4>
                                                            <h3 className='font-bold text-[18px]'>{input.gst}</h3>
                                                        </div>

                                                        <div>
                                                            <h4>Income</h4>
                                                            <h3 className='font-bold text-[18px]'>{input.income}</h3>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="grid lg:grid-cols-3 gap-4">
                                                        <div>
                                                            <div className="-space-y-px rounded-md ">
                                                                <div className="group relative  relative">
                                                                    <label htmlFor="0" className="block w-full pb-1 text-[13px] font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">PAN Number*</label>
                                                                    <input
                                                                        id="0"
                                                                        type="text"
                                                                        name='pan'
                                                                        className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-secondary text-[14px]"
                                                                        onChange={event => handleFormChange(index, event)}
                                                                        placeholder="Enter PAN Number*"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="-space-y-px rounded-md ">
                                                                <div className="group relative ">
                                                                    <label htmlFor="2" className=" pb-1 text-[13px] font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">GST Number*</label>
                                                                    <input id="2"
                                                                        type="text"
                                                                        name='gst'
                                                                        className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-secondary text-[14px]"
                                                                        onChange={event => handleFormChange(index, event)}
                                                                        placeholder="Enter GST Number*"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="-space-y-px rounded-md ">
                                                                <div className="group relative  relative">
                                                                    <label htmlFor="2" className="block w-full pb-1 text-[13px] font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Annual Income*</label>
                                                                    <input
                                                                        id="2"
                                                                        type={"text"}
                                                                        name='income'
                                                                        className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-secondary text-[14px]"
                                                                        onChange={event => handleFormChange(index, event)}
                                                                        placeholder="Enter Annual Income*"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }

                                            <h4 className='font-semibold text-secondary mt-5'>Address</h4>
                                            {
                                                input.pan && input.gst && input.income ?
                                                    <div className="grid lg:grid-cols-1 gap-4">
                                                        <div>
                                                            <h3 className='font-bold text-[18px]'>{input.address1 + ',' + input.address1 + ',' + input.landmark + ',' + input.pin + ',' + input.city + ',' + input.state + ',' + input.country}</h3>
                                                        </div>
                                                    </div>
                                                    :
                                                    <>
                                                        <div className="grid lg:grid-cols-2 gap-4">
                                                            <div>
                                                                <div className="-space-y-px rounded-md ">
                                                                    <div className="group relative">
                                                                        <label htmlFor="0" className="block w-full pb-1 text-[13px] font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Address Line 1*</label>
                                                                        <textarea
                                                                            id="message"
                                                                            name='address1'
                                                                            rows="4"
                                                                            onChange={event => handleFormChange(index, event)}
                                                                            className="block w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-secondary text-[14px]"
                                                                            placeholder="Write your address here...">
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="-space-y-px rounded-md ">
                                                                    <div className="group relative">
                                                                        <label htmlFor="0" className="block w-full pb-1 text-[13px] font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Address Line 2*</label>
                                                                        <textarea
                                                                            id="message"
                                                                            name='address2'
                                                                            onChange={event => handleFormChange(index, event)}
                                                                            rows="4"
                                                                            className="block w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-secondary text-[14px]"
                                                                            placeholder="Write your address here...">
                                                                        </textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end row */}
                                                        <div className="grid lg:grid-cols-3 gap-4 mt-3">
                                                            <div>
                                                                <div className="-space-y-px rounded-md ">
                                                                    <div className="group relative ">
                                                                        <label htmlFor="2" className=" pb-1 text-[13px] font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">Land Mark*</label>
                                                                        <input id="2"
                                                                            type="text"
                                                                            name='landmark'
                                                                            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-secondary text-[14px]"
                                                                            onChange={event => handleFormChange(index, event)}
                                                                            placeholder="Enter Land Mark*"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="-space-y-px rounded-md ">
                                                                    <div className="group relative  relative">
                                                                        <label htmlFor="2" className="block w-full pb-1 text-[13px] font-medium text-gray-400 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">PIN Code*</label>
                                                                        <input
                                                                            id="2"
                                                                            type={"text"}
                                                                            name='pin'
                                                                            onChange={event => handleFormChange(index, event)}
                                                                            className="peer h-10 w-full rounded-md bg-gray-50 px-4 font-500 outline-none drop- transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 border text-secondary text-[14px]"
                                                                            placeholder="Enter PIN Code*"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className="-space-y-px rounded-md ">
                                                                    <div className="group relative ">
                                                                        <label htmlFor="city" className="block mb-1 text-[13px] font-medium text-black ">Select City*</label>
                                                                        <select
                                                                            id="city"
                                                                            name='city'
                                                                            onChange={event => handleFormChange(index, event)}
                                                                            className=" border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 ">
                                                                            <option value="">Select City</option>
                                                                            <option value="Alipur">Alipur</option>
                                                                            <option value="Bawana">Bawana</option>
                                                                            <option value="Central Delhi">Central Delhi</option>
                                                                            <option value="Delhi">Delhi</option>
                                                                            <option value="Deoli">Deoli</option>
                                                                            <option value="East Delhi">East Delhi</option>
                                                                            <option value="Karol Bagh">Karol Bagh</option>
                                                                            <option value="Najafgarh">Najafgarh</option>
                                                                            <option value="Nangloi Jat">Nangloi Jat</option>
                                                                            <option value="Narela">Narela</option>
                                                                            <option value="New Delhi">New Delhi</option>
                                                                            <option value="North Delhi">North Delhi</option>
                                                                            <option value="North East Delhi">North East Delhi</option>
                                                                            <option value="North West Delhi">North West Delhi</option>
                                                                            <option value="Pitampura">Pitampura</option>
                                                                            <option value="Rohini">Rohini</option>
                                                                            <option value="South Delhi">South Delhi</option>
                                                                            <option value="South West Delhi">South West Delhi</option>
                                                                            <option value="West Delhi">West Delhi</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* end row */}
                                                        <div className="grid lg:grid-cols-3 gap-4 mt-3">
                                                            <div>
                                                                <div className="-space-y-px rounded-md ">
                                                                    <div className="group relative ">
                                                                        <label htmlFor="State" className="block mb-1 text-[13px] font-medium text-black ">Select State*</label>
                                                                        <select
                                                                            id="State"
                                                                            name='state'
                                                                            onChange={event => handleFormChange(index, event)}
                                                                            className=" border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 ">
                                                                            <option value="">Select State</option>
                                                                            <option value="Maharashtra">Maharashtra</option>
                                                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                                            <option value="Haryana">Haryana</option>
                                                                            <option value="Punjab">Punjab</option>
                                                                            <option value="Gujrat">Gujrat</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="-space-y-px rounded-md ">
                                                                    <div className="group relative ">
                                                                        <label htmlFor="Country" className="block mb-1 text-[13px] font-medium text-black ">Select Country*</label>
                                                                        <select
                                                                            id="Country"
                                                                            name='country'
                                                                            onChange={event => handleFormChange(index, event)}
                                                                            className=" border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 ">
                                                                            <option value="">Select Country</option>
                                                                            <option value="India">India</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                            }

                                        </>
                                        {
                                            inputFields?.length > 1 &&
                                            <button className='bg-red hover:bg-primary text-white text-[14px] rounded-[7px] px-2 py-1 mt-4 flex items-center'
                                                onClick={() => removeFields(index)}>
                                                <TrashIcon className="w-[17px] text-white mr-2" aria-hidden="true" />
                                                Remove
                                            </button>
                                        }
                                    </div>
                                )
                            })}

                            <div className='flex items-center justify-end mt-[50px]'>
                                <button
                                    onClick={handleClose}
                                    className='bg-secondary hover:bg-primary text-white text-[16px] rounded-[10px] px-3 py-2.5 w-[150px] mr-3'
                                >
                                    Cancel
                                </button>

                                {
                                    buttonLoader ?
                                        <button disabled
                                            className="bg-gray hover:bg-gray text-white text-[16px] rounded-[10px] px-3 py-2.5 w-[150px] btn-disabled"
                                        >

                                            Please wait ...
                                        </button>
                                        :
                                        <button
                                            onClick={handleSave}
                                            className='bg-primary hover:bg-primary text-white text-[16px] rounded-[10px] px-3 py-2.5 w-[150px]'
                                        >
                                            Save
                                        </button>
                                }
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </>

    )
}
