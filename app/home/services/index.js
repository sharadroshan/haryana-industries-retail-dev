import React from 'react';
import { AllServices } from '../allservices';
import { ChevronRightIcon , ShieldCheckIcon, SquaresPlusIcon, StarIcon} from '@heroicons/react/20/solid';

export const Services = () => {
    const dummyArray = [
        {
            name: 'Scheme / Incentives',
            href: '/',
            svg: <ShieldCheckIcon />,
            type: '',
            access: 'public'
        },
        {
            name: 'MSME Classification',
            href: '/',
            svg: <SquaresPlusIcon />,
            type: '',
            access: 'public'
        },
        {
            name: 'Compliance/Audit',
            href: '/compliance-audit',
            svg: <StarIcon />,
            type: '',
            access: 'public'
        },
    ];
    return (
        <section className='coponies-section pt-5 px-5 xl:pt-20 xl:pb-[100px] bg-gray' >
            <div className='container mx-auto'>
                <div className='section-title text-center'>
                    <h4 className='font-bold text-secondary text-3xl xl:text-5xl mt-2'>Our Services<span className=' text-blue'></span></h4>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-[20px] lg:mt-[50px]">
                    {
                        dummyArray.map((item, index) => {
                            return (
                                <div className='service-card mb-3' key={index}>
                                    <div className={`cursor-pointer rounded-full w-[150px] h-[150px] flex items-center justify-center p-10 mx-auto  ${index == 1 ? "bg-primary hover:bg-secondary text-white hover:text-white" : "bg-primary hover:bg-secondary text-white lg:mt-[80px]"}`}>
                                        {
                                            item.svg
                                        }
                                    </div>
                                    <h4 className='font-bold text-center text-[18px] lg:text-[28px] mt-5'>{item.name}</h4>
                                </div>
                            )
                        })
                    }

                </div>
                <AllServices />
                
            </div>
        </section>
    )
}
