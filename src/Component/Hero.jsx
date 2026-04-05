import React, { useState } from 'react';
import SlideCard from './SlideCard';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const images = [
    { title: "Sajek", image: "https://i.ibb.co.com/1tNWPNLb/Sajek.png" },
    { title: "Sreemangal", image: "https://i.ibb.co.com/PGC88hWj/Sreemongol.png" },
    { title: "Sundarbans", image: "https://i.ibb.co.com/3ybPxxCW/sundorbon.png" },
]

const Hero = () => {
    const [index, setIndex] = useState(0);

    const next = () => {
        if (index < images.length - 2) {
            setIndex(index + 1);
        }
    }

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return (
        <div>
            <div className='w-11/12 mx-auto pt-10 grid grid-cols-12 pl-10 gap-4'>
                <div className='col-span-4'>
                    <h1 className='text-6xl text-primary bebas mb-3'>COX'S BAZAR</h1>
                    <p className='mont text-primary text-sm mb-5 text-justify '>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to='/booking'>
                        <button className='flex gap-2 px-4 py-2 bg-secondary text-black font-semibold rounded-sm mont items-center'>Booking <FaArrowRightLong /></button>
                    </Link>
                </div>
                <div className='col-span-8'>
                    <SlideCard index={index} images={images}></SlideCard>
                </div>
            </div>
            {/* button */}
            <div className='flex justify-center items-center gap-2 text-primary pt-5'>
                <button onClick={prev} className='p-2 bg-primary rounded-full text-[#001931]'><FaLessThan /></button>
                <button onClick={next} className='p-2 bg-primary rounded-full text-[#001931]'><FaGreaterThan /></button>
            </div>
        </div>
    );
};

export default Hero;