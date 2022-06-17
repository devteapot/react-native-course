import { useState, useEffect } from "react";
import { 
  Accuracy, 
  requestForegroundPermissionsAsync, 
  watchPositionAsync 
} from "expo-location";

const useLocation = (trackingEnabled, onChangePosition) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = () => {
      requestForegroundPermissionsAsync()
        .then(async () => {
          subscriber = await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10,
            },
            onChangePosition,
          );
        })
        .catch(setErr);
    };

    if (trackingEnabled) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) subscriber.remove();
    }
  }, [trackingEnabled, onChangePosition]);

  return [err];
}

export default useLocation;
