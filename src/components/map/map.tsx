import { useRef, useEffect, useCallback } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useMap } from '../../hooks/use-map';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { BookingItemType } from '../../types/booking-item-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { changeLocation } from '../../store/action';
import { getSelectedLocation } from '../../store/data-process/data-process-selectors';

type MapProps = {
  bookingItems: BookingItemType[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ bookingItems }: MapProps) {

  const dispatch = useAppDispatch();

  let selectedLocation = useAppSelector(getSelectedLocation);

  if (selectedLocation === null || !bookingItems.some((bookingItem) => bookingItem.id === selectedLocation?.id)) {
    selectedLocation = bookingItems[0];
  }

  const handleLocationClick = useCallback((bookingItem: BookingItemType): void => {
    dispatch(changeLocation(bookingItem));
  }, [dispatch]);

  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedLocation.location);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      bookingItems.forEach((bookingItem) => {
        const marker = new Marker({
          lat: bookingItem.location.coords[0],
          lng: bookingItem.location.coords[1]
        });

        marker
          .setIcon(
            selectedLocation && bookingItem.location.address === selectedLocation.location.address
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .on('click', () => handleLocationClick(bookingItem))
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, bookingItems, selectedLocation, handleLocationClick]);

  return (<div className="map__container" ref={mapRef}></div>);
}

export { Map };
