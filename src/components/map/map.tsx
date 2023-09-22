import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useMap } from '../../hooks/use-map';
import { BookingItemType, LocationType } from '../../types/booking-item-type';
//import { City, Offer, Offers } from '../../types/offer-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  //city: City;
  //offers: Offers;
  //selectedOffer: Offer | undefined;
  bookingItems: BookingItemType[];
  selectedLocation: LocationType;

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

function Map({ bookingItems, selectedLocation }: MapProps) {
  //const { city, offers, selectedOffer } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedLocation);

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
            selectedLocation && bookingItem.location.address === selectedLocation.address
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, bookingItems, selectedLocation]);

  /*return (
    <section
      className="cities__map map"
      ref={mapRef}
    />
  );*/

  return (<div className="map__container" ref={mapRef}></div>);
}

export { Map };
