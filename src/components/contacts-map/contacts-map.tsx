import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useMap } from '../../hooks/use-map';
import { URL_MARKER_CURRENT, ContactsLocation } from '../../const';
import 'leaflet/dist/leaflet.css';

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function ContactsMap () {

  const ADDRESS = 'Санкт-Петербург,<br/> Набережная реки Карповка, д 5П';

  const Location = {
    address: ADDRESS,
    coords: [ ContactsLocation.Latitude, ContactsLocation.Longitude ]
  };

  const mapRef = useRef(null);
  const map = useMap(mapRef, Location);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const marker = new Marker({
        lat: Location.coords[0],
        lng: Location.coords[1]
      });

      marker
        .setIcon(currentCustomIcon)
        .addTo(markerLayer);
    }
  }, [map, Location.coords]);

  return (<div className="map__container" ref={mapRef}></div>);
}

export { ContactsMap };
