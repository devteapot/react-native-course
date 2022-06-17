import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const trackReducer = (state, { type, payload }) => {
  switch (type) {
    case 'FETCH_TRACKS': return payload;
    default: return state;
  }
};

const fetchTracks = (dispatch) => async () => 
  trackerApi
    .get('/tracks')
    .then(({ data }) => {
      dispatch({ type: 'FETCH_TRACKS', payload: data });
    });

const createTrack = (dispatch) => (name, locations) => 
  trackerApi
    .post('/tracks', { name, locations }); 

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
