import React from 'react';
import { FaStar } from 'react-icons/fa';

const HotelCard = ({ singleHotel, onClick }) => {
    const { image, roomDetails, title, features, cancellation, rating, reviews, pricePerNight, totalPrice } = singleHotel;
    return (
        <div onClick={onClick} className='flex flex-col lg:flex-row lg:justify-between lg:items-start px-4 py-2 gap-6 cursor-pointer'>
            {/* image */}
            <div>
                <img src={image} alt={title} className='w-60 h-40 rounded-md'/>
            </div>
            {/* content */}
            <div className='w-full mont space-y-2'>
                <h4 className='text-2xl font-bold text-[#001931]'>{title}</h4>
                <p className='font-semibold text-accent'>{roomDetails}</p>
                <p className='flex gap-4 text-accent font-semibold'>
                    {
                        features.map((feature, index) => <span key={index}>{feature}</span>)
                    }
                </p>
                <p className='text-accent font-semibold'>{cancellation}</p>
                <div className='flex items-center gap-8'>
                    <p>
                        <span className='flex gap-1 text-[#001931] font-semibold items-center'><FaStar className='text-orange-400'/> {rating}({reviews})</span>
                    </p>
                    <p className='flex gap-3 items-center'>
                        <span className='text-[#001931] font-semibold'>${pricePerNight}/<span className='text-accent'>Night</span></span>
                        <span className='text-accent font-bold'>${totalPrice} total</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;