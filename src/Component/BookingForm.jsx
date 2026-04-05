import React from 'react';
import { Link } from 'react-router';

const BookingForm = () => {

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const origin = form.origin.value;
        const destination = form.destination.value;
        const fromDate = form.fromDate.value;
        const toDate = form.toDate.value;
        console.log(origin, destination, fromDate, toDate);
        form.reset();
    }

    return (
        <div>
            <div className='bg-white w-md px-12 py-10 rounded-xl'>
                <form onSubmit={handleBooking} className='flex flex-col space-y-2 mont'>
                    {/* origin */}
                    <label className='text-accent'>Origin</label>
                    <input type="text" name="origin" required className='bg-base-200 py-2 px-4 text-lg outline-none rounded-lg' />
                    {/* destination */}
                    <label className='text-accent'>Destination</label>
                    <input type="text" name="destination" required className='bg-base-200 py-2 px-4 text-lg outline-none rounded-lg' />
                    {/* booking date */}
                    <div className='flex justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <label className='text-accent'>From</label>
                            <input type="date" name="fromDate" required className='bg-base-200 py-2 px-4 text-sm outline-none rounded-lg' />
                        </div>

                        <div className='flex flex-col space-y-1'>
                            <label className='text-accent'>To</label>
                            <input type="date" name="toDate" required className='bg-base-200 py-2 px-4 text-sm outline-none rounded-lg' />
                        </div>
                    </div>
                    {/* booking button */}
                    <div className='mt-4'>
                        <button className=' px-4 py-2 bg-secondary text-[#001931] font-semibold rounded-sm mont items-center w-full cursor-pointer'>Start Booking</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;