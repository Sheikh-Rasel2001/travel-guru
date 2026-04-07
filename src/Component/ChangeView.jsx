import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const ChangeView = ({selectedHotel}) => {
    const map = useMap();

    useEffect(() => {
        if(selectedHotel){
            map.setView(
                [selectedHotel.lat, selectedHotel.lng],
                14
            )
        }
    }, [selectedHotel])
    return null;
};

export default ChangeView;