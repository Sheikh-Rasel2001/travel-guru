import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { FaLocationDot } from 'react-icons/fa6';
import { FcMoneyTransfer } from 'react-icons/fc';
import L from "leaflet";
import ChangeView from './ChangeView';
import FitBounds from './FitBounds';

const MapView = ({ hotels, selectedHotel }) => {
    // console.log(hotels);
    const customIcon = (price) =>
        L.divIcon({
            html: `<div style="
        background-color: white;
        padding: 6px 10px;
        border-radius: 20px;
        font-weight: bold;
        border: 1px solid #ccc;
        color: #000;
        box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        white-space: nowrap;
        z-index : 1000;
      ">
        $${price}
      </div>
      <!-- PIN -->
        <div style="
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 12px solid #333;
          margin-top: -2px;
        "></div>
      </div>
    `,
            className: "custom-marker",
            iconSize: [60, 30],
            iconAnchor: [30, 15],
        });
    return (
        <div className='w-full h-full rounded-lg'>
            <MapContainer
                center={[hotels[0]?.lat || 23.8103, hotels[0]?.lng || 90.4125]}
                zoom={7}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <FitBounds hotels={hotels}></FitBounds>
                {/* zoom view */}
                <ChangeView selectedHotel={selectedHotel}></ChangeView>
                {
                    hotels.map(hotel => (
                        <Marker
                            key={hotel.id}
                            position={[hotel.lat, hotel.lng]}
                            icon={customIcon(hotel.pricePerNight)}
                        >
                            <Popup>
                                <div>
                                    <h3>{hotel.title}</h3>
                                    <p className='flex gap-2 items-center'><FcMoneyTransfer />${hotel.pricePerNight}</p>
                                    <p className='flex gap-2 items-center'><FaLocationDot />{hotel.location}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                }

            </MapContainer>
        </div>
    );
};

export default MapView;