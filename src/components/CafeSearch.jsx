'use client';
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CafeCard from './CafeCard';
import CafeData from '../data/chuncheon_cafe_data.json';

const MapContainer = dynamic(() => import('./MapContainer'), {
  ssr: false,
  loading: () => <p>지도를 불러오는 중...</p>,
});

const CafeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cafes, setCafes] = useState(CafeData);
  const [filteredCafes, setFilteredCafes] = useState(CafeData);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [mapCenter, setMapCenter] = useState([37.5665, 126.9780]);
  const [mapZoom, setMapZoom] = useState(13);

  const handleSearch = () => {
    const filtered = cafes.filter(cafe => 
      cafe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCafes(filtered);

    if (filtered.length > 0) {
      setMapCenter([filtered[0].lat, filtered[0].lng]);
      setMapZoom(11);
    }
  };

  const handleMarkerClick = (cafe) => {
    setSelectedCafe(cafe);
    setMapCenter([cafe.lat, cafe.lng]);
    setMapZoom(11);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold italic mb-4" style={{fontFamily: '"Dancing Script", cursive'}}>hiddenTeria</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="카페 이름을 입력하세요"
          className="flex-grow p-2 border rounded-l"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          검색
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <MapContainer 
            cafes={filteredCafes}
            mapCenter={mapCenter}
            mapZoom={mapZoom}
            onMarkerClick={handleMarkerClick}
          />
          {selectedCafe && <CafeCard cafe={selectedCafe} />}
        </div>
        <div className="overflow-y-auto max-h-screen">
          {filteredCafes.map((cafe) => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeSearch;