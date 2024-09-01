'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = ({ cafes, mapCenter, mapZoom, onMarkerClick }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => <p>지도를 불러오는 중...</p>,
  });

  if (!isMounted) {
    return null;
  }

  return (
    <MapWithNoSSR
      cafes={cafes}
      mapCenter={mapCenter}
      mapZoom={mapZoom}
      onMarkerClick={onMarkerClick}
    />
  );
};

export default MapContainer;