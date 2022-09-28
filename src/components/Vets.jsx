import {useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export default function Vets() {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyBAsWxrTbAK37QYejhKepyabrVUnT3Tlbg",
  });
  if(!isLoaded) return <div>Loading...</div>;

  return <Map />;
};

function Map() {

  const center = useMemo(() => ({ lat: 44, lng: -80}), []);


  return (<GoogleMap zoom={10} center={center} mapContainerClassName="w-full h-[700px]">
    <Marker position={center} />
  </GoogleMap>);
}