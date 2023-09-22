import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
//import { City } from '../types/offer-type';
import { LocationType } from '../types/booking-item-type';
import { ZOOM } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  //city: City
  location: LocationType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {

      //const { location } = city;
      const { coords } = location;
      const instance = new Map(mapRef.current, {
        center: {
          lat: coords[0],
          lng: coords[1]
        },
        zoom: ZOOM
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
}

export { useMap };
