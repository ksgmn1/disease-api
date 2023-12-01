import { useEffect, useState } from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap({ accidents }) {
//   const center = accidents[];

  return (
    <div className='relative h-[500px] w-full border rounded-lg'>
      <Map
      // lat : 위도(위 아래), lng : 경도
        center={{ lat: 37.58252751210247, lng: 126.98068251210247 }}
        level={8}
        className='h-full'
      >
      
        <MapMarker
          style={{ border: 'tranparent' }}
          position={{ lat: 37.53252751210247, lng: 126.98068251210247 }}
        >
        
          <div
          >
            용산구
          </div>
        </MapMarker>
      </Map>
    </div>
    //핀에 적힐 이름 (위치 이름)
  );
}
