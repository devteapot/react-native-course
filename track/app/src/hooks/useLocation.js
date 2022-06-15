import { useState, useEffect } from "react";
import { 
  Accuracy, 
  requestForegroundPermissionsAsync, 
  watchPositionAsync 
} from "expo-location";

const useLocation = (trackingEnabled, onChangePosition) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = () => {
    requestForegroundPermissionsAsync()
      .then(async () => {
        const sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          onChangePosition,
        );

        setSubscriber(sub);
      })
      .catch(setErr);
  }

  useEffect(() => {
    if (trackingEnabled) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [trackingEnabled]);

  return [err];
}

export default useLocation;
