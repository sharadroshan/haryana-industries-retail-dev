import React from 'react';
import { TopHeader } from "../components/topheader";
import { Navbar } from "../components/navbar"; 
import { Breathcumb } from '../components/breathcumb';
import { Services } from '../components/services';
import { Footer } from '../components/footer';


const Page = () => {
    return (
        <div>
            <TopHeader />
            <Navbar />
            {/* <Breathcumb
                title='Our Services' description=''
            /> */}
            <Services />
            <Footer />
        </div>
    )
}

export default Page