import axios from 'axios';

// Cấu hình base URL cho API
const API_BASE_URL = 'https://api.example.com'; // Thay đổi URL này theo API thực tế của bạn

// Tạo instance axios với cấu hình mặc định
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 giây
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để thêm token vào header (nếu cần)
apiClient.interceptors.request.use(
  (config) => {
    // Thêm token vào header nếu có
    const token = localStorage.getItem('token'); // hoặc AsyncStorage trong React Native
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor để xử lý response
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Xử lý lỗi chung
    if (error.response?.status === 401) {
      // Token hết hạn, redirect về login
      console.log('Token expired, redirect to login');
    }
    return Promise.reject(error);
  }
);

// Các hàm helper để gọi API
export const apiService = {
  // GET request
  get: async (url: string, params?: any) => {
    try {
      const response = await apiClient.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // POST request
  post: async (url: string, data?: any) => {
    try {
      const response = await apiClient.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // PUT request
  put: async (url: string, data?: any) => {
    try {
      const response = await apiClient.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // DELETE request
  delete: async (url: string) => {
    try {
      const response = await apiClient.delete(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
