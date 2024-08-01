import axios from 'axios';
import {Platform} from 'react-native';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3030',
  baseURL: 'http://192.168.0.155:3030',
  // baseURL:
  //   Platform.OS === 'android'
  //     ? 'http://10.0.2.2:3030'
  //     : 'http://localhost:3030',
  withCredentials: true,
});

export default axiosInstance;
