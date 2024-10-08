import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {LatLng} from 'react-native-maps';
import useAppState from './useAppstate';

function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 37.421998333333335,
    longitude: 126.9898962,
  });
  const [isUserLocationError, setIsUserLocationError] = useState(false);
  const {isComback} = useAppState();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        // setUserLocation({latitude, longitude});
        setUserLocation({
          latitude: 37.421998333333335,
          longitude: 126.9898962,
        });
        setIsUserLocationError(false);
      },
      () => {
        setIsUserLocationError(true);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, [isComback]);

  return {userLocation, isUserLocationError};
}

export default useUserLocation;
