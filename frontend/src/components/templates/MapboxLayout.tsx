import ReactMapGL, {
  FullscreenControl,
  Marker,
  NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import * as API from 'api/services';

export default function MapboxLayout() {
  const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  const [data, setData] = useState([]);
  const [lng, setLng] = useState();
  const [lat, setLat] = useState();

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
          ></Marker>
        ))}
        <NavigationControl position='bottom-right' />
        <FullscreenControl />
      </ReactMapGL>
    </>
  );
}
