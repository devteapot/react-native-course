import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { useNavigation } from "@react-navigation/native";

const useSaveTrack = () => {
  const { createTrack } = useContext(TrackContext);
  const { state: { name, locations }, reset } = useContext(LocationContext);

  const navigation = useNavigation();
  
  const saveTrack = () => {
    createTrack(name, locations)
      .then(() => {
        reset();
        navigation.navigate('TrackList');
      });
  };

  return [saveTrack];
}

export default useSaveTrack;
