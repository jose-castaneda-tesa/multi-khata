import axios from axios';
import ref from toValue

const axiosRiksiri = axios.create({
  baseURL: 'https://riksiri.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosRiksiri.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }

  export default axiosRiksiri;