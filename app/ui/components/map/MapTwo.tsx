"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./styles.css";
import { IMapState } from "yandex-maps";

interface MapTwoProps {
  coordinates: number[];
}

const MapLoder = () => {
  return <div className="map__loading--loading"></div>;
};

export default function MapTwo({ coordinates }: MapTwoProps) {
  const [loading, setLoading] = React.useState<boolean>(true);
  const defaultState: IMapState = {
    center: coordinates,
    zoom: 10,
  };

  return (
    <YMaps>
      {loading && <MapLoder></MapLoder>}
      <Map
        defaultState={defaultState}
        id="map"
        className="map_container"
        onLoad={() => setLoading(false)}
      >
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
}
