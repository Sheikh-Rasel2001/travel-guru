import React from 'react';
import BookingForm from '../Component/BookingForm';

const Booking = () => {
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='flex justify-between items-start'>
                <div className='px-8'>
                    <h1 className='text-6xl text-primary bebas mb-3'>COX'S BAZAR</h1>
                    <p className='mont text-primary text-sm mb-5 text-justify w-xl'>Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
                {/* booking form */}
                <div className=''>
                    <BookingForm></BookingForm>
                </div>
            </div>
        </div>
    );
};

export default Booking;