"use client";
import React, { useEffect, useRef } from "react";
import "./styles.css";

interface YandexMapProps {
  center: [number, number];
  zoom: number;
}

const YandexMap: React.FC<YandexMapProps> = ({ center, zoom }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const mapRef = useRef<ymaps.Map | null>(null);

  useEffect(() => {
    const loadYandexMaps = () => {
      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.REACT_APP_YMAP_KEY}&lang=en_US`;
      script.async = true;
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(initMap);
        }
      };
      script.onerror = () => {
        console.error("Failed to load Yandex Maps script");
      };
      document.body.appendChild(script);
      setLoading(false);
    };

    const initMap = () => {
      if (mapRef.current) {
        mapRef.current.setCenter(center);
        mapRef.current.setZoom(zoom);
      } else {
        mapRef.current = new window.ymaps.Map("map", {
          center: center,
          zoom: zoom,
        });
        
      }
    };

    if (!window.ymaps) {
      loadYandexMaps();
    } else {
      initMap();
    }

    return () => {
      const mapsScript = document.querySelector(
        `script[src*="https://api-maps.yandex.ru"]`
      );
      if (mapsScript) {
        document.body.removeChild(mapsScript);
      }
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, [center, zoom]);

  return loading ? (
    <div className="map_container map__loading--loading"></div>
  ) : (
    <div id="map" className="map_container"/>
  );
};

export default YandexMap;
