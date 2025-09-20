import { apiService } from './api';
import { Product } from '../lib/types/product.types';

// Định nghĩa interface cho response API
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

// Service cho sản phẩm
export const productService = {
  // Lấy danh sách tất cả sản phẩm
  getAllProducts: async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    search?: string;
    sort?: string;
  }): Promise<ProductsResponse> => {
    return apiService.get('/products', params);
  },

  // Lấy sản phẩm theo ID
  getProductById: async (id: string): Promise<Product> => {
    return apiService.get(`/products/${id}`);
  },

  // Lấy sản phẩm nổi bật
  getFeaturedProducts: async (limit: number = 10): Promise<Product[]> => {
    return apiService.get('/products/featured', { limit });
  },

  // Lấy sản phẩm mới
  getNewProducts: async (limit: number = 10): Promise<Product[]> => {
    return apiService.get('/products/new', { limit });
  },

  // Tìm kiếm sản phẩm
  searchProducts: async (query: string, params?: {
    page?: number;
    limit?: number;
    category?: string;
  }): Promise<ProductsResponse> => {
    return apiService.get('/products/search', { query, ...params });
  },

  // Lấy sản phẩm theo danh mục
  getProductsByCategory: async (category: string, params?: {
    page?: number;
    limit?: number;
    sort?: string;
  }): Promise<ProductsResponse> => {
    return apiService.get(`/products/category/${category}`, params);
  },

  // Lấy danh sách danh mục
  getCategories: async (): Promise<Array<{ id: string; name: string; icon: string; color: string }>> => {
    return apiService.get('/categories');
  },

  // Tạo sản phẩm mới (Admin)
  createProduct: async (productData: Partial<Product>): Promise<Product> => {
    return apiService.post('/products', productData);
  },

  // Cập nhật sản phẩm (Admin)
  updateProduct: async (id: string, productData: Partial<Product>): Promise<Product> => {
    return apiService.put(`/products/${id}`, productData);
  },

  // Xóa sản phẩm (Admin)
  deleteProduct: async (id: string): Promise<void> => {
    return apiService.delete(`/products/${id}`);
  },
};
