import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import NewPlantsSection from './NewPlantSection';
import FAQSection from './FAQSection';

const Home = () => {
    return (
        <div >
           <div className='bg-[#C9D2D7]'>
             <HeroSection/>
           </div>
           <div className="newplant">
            <NewPlantsSection/>
           </div>
           <div>
            <FAQSection/>
           </div>
        </div>
    );
};

export default Home;