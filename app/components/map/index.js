import React from 'react';

export const Map = () => {

    return (
        <>
            <section className='coponies-section pt-10 pb-5 xl:pt-10 xl:pb-40 bg-gray'>
                <div className='container mx-auto '>
                    <div className='section-title text-center '>
                        <h6 className='font-semibold  text-sm xl:text-xl'>LOCATION</h6>
                        <h4 className='font-bold text-primary text-3xl xl:text-5xl mt-2'>Find Us<span className=' text-blue'></span></h4>
                    </div>
                    <div className='mt-10 lg:mt-20 shadow-xl bg-white p-3 rounded-xl'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d888691.8392164526!2d75.027051!3d29.532313999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114c4abd1de2f5%3A0x34bb800f920dd8c9!2sComputer%20Plus%20-%20Best%20and%20Oldest%20Tally%20Training%20%7C%20Accountancy%20Course%20Institute%20%7C%20Computer%20Training%20Center%20in%20Sirsa%20Since%201998!5e0!3m2!1sen!2sus!4v1705989907016!5m2!1sen!2sus"  width='100%' height='600'></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}
