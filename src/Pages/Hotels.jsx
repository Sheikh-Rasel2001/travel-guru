import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router';
import Navbar from '../Component/Navbar';
import HotelCard from '../Component/HotelCard';
import MapView from '../Component/MapView';

const Hotels = () => {
    const location = useLocation();
    const destination = location.state?.destination || location.state?.from?.state?.destination;
    const hotels = useLoaderData();
    const [selectedHotel, setSelectedHotel] = useState(null);

    // filter data with destination
    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase() === destination?.toLowerCase())

    return (
        <div className='bg-white h-screen flex flex-col overflow-hidden pb-10 pt-5'>
            <div className='w-11/12 h-full mx-auto flex-1 flex flex-col'>
                <header className='border-b pb-4 border-b-gray-300'>
                    <Navbar isDark={false}></Navbar>
                </header>
                <main className='mt-6 min-h-0 flex justify-between items-start gap-8 flex-1'>
                    <div className='w-full h-full overflow-y-auto'>
                        <h1 className='text-2xl text-[#001931] font-semibold mb-4 mont'>Stay In {destination}</h1>
                        {/* hotel details */}
                        <div className='space-y-6'>
                            {
                                filteredHotels.map(singleHotel => <HotelCard
                                    key={singleHotel.id}
                                    singleHotel={singleHotel}
                                    onClick={() => setSelectedHotel(singleHotel)}
                                ></HotelCard>)
                            }

                        </div>
                    </div>
                    {/* map */}
                    <div className='w-full mapHight overflow-hidden'>
                        <MapView hotels={filteredHotels} selectedHotel={selectedHotel}></MapView>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Hotels;