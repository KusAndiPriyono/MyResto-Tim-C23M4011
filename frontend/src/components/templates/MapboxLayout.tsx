import ReactMapGL, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import * as API from 'api/services';

export default function MapboxLayout() {
  const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  const [data, setData] = useState<
    {
      startLocation: { coordinates: number[] };
      name: string;
      description: string;
    }[]
  >([]);
  const [lng, setLng] = useState<number>();
  const [lat, setLat] = useState<number>();
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await API.DataGet('restaurants');
      if (response.status === 200) {
        const restaurantsData = response.data;
        setData(restaurantsData);

        if (restaurantsData.length > 0) {
          const { startLocation } = restaurantsData[0];
          const { coordinates } = startLocation;
          setLat(coordinates[0]);
          setLng(coordinates[1]);
        }
      } else {
        setData([]);
      }
    }

    fetchData();

    return () => {
      setData([]);
    };
  }, []);

  const handleMarkerClick = (marker: any) => {
    setSelectedMarker(marker);
  };

  return (
    <>
      <ReactMapGL
        mapboxAccessToken={mapboxAccessToken}
        mapStyle='mapbox://styles/andipriyono94/clir17ych00mo01qv0hz074kk'
        style={{ width: '100%', height: '400px' }}
        initialViewState={{ longitude: lng, latitude: lat }}
      >
        {data.map((item: any) => (
          <Marker
            key={item}
            latitude={item.startLocation.coordinates[0]}
            longitude={item.startLocation.coordinates[1]}
          >
            <img
              onClick={() => handleMarkerClick(item)}
              style={{
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                backgroundImage: `url(../images/mapbox-icon.png)`,
              }}
              src='../images/mapbox-icon.png'
            />
          </Marker>
        ))}

        {selectedMarker && (
          <Popup
            latitude={selectedMarker.startLocation.coordinates[0]}
            longitude={selectedMarker.startLocation.coordinates[1]}
            onClose={() => setSelectedMarker(null)}
            closeOnClick={false}
          >
            <div>
              <h3>{selectedMarker.name}</h3>
              <p>{selectedMarker.description}</p>
            </div>
          </Popup>
        )}

        <NavigationControl position='bottom-right' />
        <FullscreenControl />
        <GeolocateControl />
      </ReactMapGL>
    </>
  );
}
