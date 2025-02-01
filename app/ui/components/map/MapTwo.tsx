'use client';
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "./styles.css";



const  MapLoder =() =>{

    return (
        <div className='map__loading--loading'></div>
    )
}

export default function MapTwo() {
    const [loading, setLoading] = React.useState<boolean>(true);
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  return (
    
    <YMaps>
        {loading && <MapLoder></MapLoder>}
      <Map defaultState={defaultState} id='map' className='map_container' onLoad={() => setLoading(false)}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}

