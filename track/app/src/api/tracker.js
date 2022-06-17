import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

instance.interceptors.request.use(
  (config) => AsyncStorage
    .getItem('token')
    .then((token) => ({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    })),
  (err) => Promise.reject(err),
);

export default instance;
