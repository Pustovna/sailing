'use client';
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import "./styles.css";


export default function MapTwo() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState}  className='map_container'>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}