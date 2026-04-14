import React from 'react';
import BookingForm from '../Component/BookingForm';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const Booking = () => {
    return (
        <div className='w-11/12 mx-auto py-8'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
                <div className='lg:w-1/21/2 px-4 lg:px-8'>
                    <h1 className='text-6xl text-primary bebas mb-3'>COX'S BAZAR</h1>
                    <p className='mont text-primary text-sm mb-5 text-justify w-full'>Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
                {/* booking form */}
                <div className='lg:w-1/2'>
                    <BookingForm></BookingForm>
                </div>
            </div>
          {/* back to home */}
                <Link to='/' className='flex items-center text-blue-500 gap-2 hover:text-primary mont w-fit pt-6 lg:pt-0'><FaArrowLeft /> Back To Home</Link>
        </div>
    );
};

export default Booking;