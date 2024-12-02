/* global kakao */
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMapComponent = () => {
    return (
        <div>
            <Map level={6} 
                center={{lat:35.15987396299036,lng:126.8797199392423 }} 
                style={{width:'100%',height:'300px'}}>
                    
                <MapMarker 
                    position={{lat:35.15987396299036,lng:126.8797199392423,}} >
                    <div>유스퀘어 버스터미널</div>
                </MapMarker>
    
            </Map>
        </div>
      )
}

export default KakaoMapComponent