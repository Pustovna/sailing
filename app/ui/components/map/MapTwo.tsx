"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./styles.css";
import { IMapState } from "yandex-maps";

interface MapTwoProps {
  coordinates?: {
    lat: number;
    long: number;
  };
}

const MapLoder = () => {
  return <div className="map__loading--loading"></div>;
};

export default function MapTwo({ coordinates }: MapTwoProps) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const defaultState: IMapState = {
    center: coordinates ? [coordinates?.lat, coordinates?.long] : [0.00, 0.00],
    zoom: 15,
  };


  return (
    <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY }}>
      {loading && <MapLoder></MapLoder>}
      <Map
        defaultState={defaultState}
        id="map"
        className="map_container"
        onLoad={() => setLoading(false)}
      >
        <Placemark geometry={[coordinates?.lat, coordinates?.long]} />
      </Map>
    </YMaps>
  );
}
