import { useMap } from "react-leaflet";
import { useEffect } from "react";

const FitBounds = ({ hotels }) => {
  const map = useMap();

  useEffect(() => {
    if (hotels.length > 0) {
      const bounds = hotels.map(h => [h.lat, h.lng]);
      map.fitBounds(bounds);
    }
  }, [hotels]);

  return null;
};

export default FitBounds;