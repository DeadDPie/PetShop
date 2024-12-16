import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Укажите базовый URL вашего API
  timeout: 5000, // Укажите таймаут запросов
  headers: {
    'Content-Type': 'application/json',
  },
});

// Пример добавления токена авторизации (если потребуется):
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Ваш метод получения токена
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
