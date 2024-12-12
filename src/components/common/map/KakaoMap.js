import React, { useEffect, useRef, useState } from 'react';
import { API_URL } from "../../../api/api";
import axios from "axios";

/* global kakao*/

// 주소를 좌표로 변환하는 함수
const convertAddressToCoords = async (address) => {
    try {
        const response = await axios.get(
            `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
            {
                headers: {
                    'Authorization': `KakaoAK 92547fd01f7a118bf85c3828be03710a`,
                    'KA': 'sdk/1.0.0',
                    'Accept': 'application/json',
                    'origin': window.location.origin
                }
            }
        );

        if (response.data.documents.length > 0) {
            const { x: longitude, y: latitude } = response.data.documents[0];
            return {
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude)
            };
        }
        return null;
    } catch (error) {
        console.error('주소 변환 중 오류 발생:', error);
        return null;
    }
};

class KakaoMapManager {
    constructor(mapContainer) {
        this.map = new kakao.maps.Map(mapContainer, {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 8
        });

        this.markers = [];
    }

    relayout() {
        this.map.relayout();
    }

    addMarker(latitude, longitude, store) {
        const position = new kakao.maps.LatLng(latitude, longitude);

        const marker = new kakao.maps.Marker({
            position: position,
            map: this.map
        });

        const iwContent = `
            <div style="padding:5px;width:200px;">
                <strong>${store.restaurant_name}</strong><br/>
                ${store.restaurant_addr}<br/>
                ${store.restaurant_phone || '전화번호 없음'}
            </div>
        `;

        const infowindow = new kakao.maps.InfoWindow({
            content: iwContent
        });

        kakao.maps.event.addListener(marker, 'click', () => {
            this.closeAllInfoWindows();
            infowindow.open(this.map, marker);
        });

        this.markers.push({ marker, infowindow });
    }

    closeAllInfoWindows() {
        this.markers.forEach(({ infowindow }) => {
            infowindow.close();
        });
    }

    fitBounds() {
        if (this.markers.length === 0) return;

        const bounds = new kakao.maps.LatLngBounds();
        this.markers.forEach(({ marker }) => {
            bounds.extend(marker.getPosition());
        });
        this.map.setBounds(bounds);
    }

    clearMarkers() {
        this.markers.forEach(({ marker, infowindow }) => {
            marker.setMap(null);
            infowindow.close();
        });
        this.markers = [];
    }
}

const KakaoMap = () => {
    const mapRef = useRef(null);
    const mapManagerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initializeMap = async () => {
            try {
                if (!mapRef.current) return;

                mapManagerRef.current = new KakaoMapManager(mapRef.current);
                mapManagerRef.current.relayout();

                const response = await axios.get(`${API_URL}/all_thousand_addr`);
                const stores = response.data;

                console.log(stores)

                for (const store of stores) {
                    const coords = await convertAddressToCoords(store.restaurantAddr);
                    if (coords) {
                        mapManagerRef.current.addMarker(
                            coords.latitude,
                            coords.longitude,
                            store
                        );
                    }
                }

                mapManagerRef.current.fitBounds();

                setIsLoading(false);
                setTimeout(() => {
                    if (mapManagerRef.current) {
                        mapManagerRef.current.relayout();
                    }
                }, 100);
            } catch (error) {
                console.error('지도 초기화 중 오류 발생:', error);
                setError('지도를 불러오는데 실패했습니다.');
                setIsLoading(false);
            }
        };

        initializeMap();

        const handleResize = () => {
            if (mapManagerRef.current) {
                mapManagerRef.current.relayout();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mapManagerRef.current) {
                mapManagerRef.current.clearMarkers();
            }
        };
    }, []);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div>
            {isLoading && <div className="loading">지도를 불러오는 중...</div>}
            <div
                ref={mapRef}
                style={{
                    width: '100%',
                    height: '400px',
                    display: isLoading ? 'none' : 'block'
                }}
            />
        </div>
    );
};

export default KakaoMap;