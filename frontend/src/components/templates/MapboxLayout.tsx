import Map, { Marker } from 'react-map-gl';

export default function MapboxLayout() {
  const mapboxAccessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  return (
    <>
      <Map
        mapboxAccessToken={mapboxAccessToken}
        mapStyle={'mapbox://styles/andipriyono94/clir17ych00mo01qv0hz074kk'}
        style={{ width: '100%', height: '400px' }}
      />
    </>
  );
}
