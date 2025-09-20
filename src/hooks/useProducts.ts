import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '../services/productService';
import { Product } from '../lib/types/product.types';

// Hook để lấy tất cả sản phẩm
export const useProducts = (params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  sort?: string;
}) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => productService.getAllProducts(params),
    staleTime: 5 * 60 * 1000, // 5 phút
    gcTime: 10 * 60 * 1000, // 10 phút
  });
};

// Hook để lấy sản phẩm theo ID
export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id, // Chỉ gọi API khi có ID
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Hook để lấy sản phẩm nổi bật
export const useFeaturedProducts = (limit: number = 10) => {
  return useQuery({
    queryKey: ['featured-products', limit],
    queryFn: () => productService.getFeaturedProducts(limit),
    staleTime: 10 * 60 * 1000, // 10 phút
    gcTime: 15 * 60 * 1000, // 15 phút
  });
};

// Hook để lấy sản phẩm mới
export const useNewProducts = (limit: number = 10) => {
  return useQuery({
    queryKey: ['new-products', limit],
    queryFn: () => productService.getNewProducts(limit),
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

// Hook để tìm kiếm sản phẩm
export const useSearchProducts = (query: string, params?: {
  page?: number;
  limit?: number;
  category?: string;
}) => {
  return useQuery({
    queryKey: ['search-products', query, params],
    queryFn: () => productService.searchProducts(query, params),
    enabled: !!query && query.length > 0, // Chỉ gọi API khi có query
    staleTime: 2 * 60 * 1000, // 2 phút
    gcTime: 5 * 60 * 1000, // 5 phút
  });
};

// Hook để lấy sản phẩm theo danh mục
export const useProductsByCategory = (category: string, params?: {
  page?: number;
  limit?: number;
  sort?: string;
}) => {
  return useQuery({
    queryKey: ['products-by-category', category, params],
    queryFn: () => productService.getProductsByCategory(category, params),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// Hook để lấy danh mục
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => productService.getCategories(),
    staleTime: 30 * 60 * 1000, // 30 phút
    gcTime: 60 * 60 * 1000, // 1 giờ
  });
};

// Hook để tạo sản phẩm mới
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (productData: Partial<Product>) => 
      productService.createProduct(productData),
    onSuccess: () => {
      // Invalidate và refetch các query liên quan
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['featured-products'] });
      queryClient.invalidateQueries({ queryKey: ['new-products'] });
    },
  });
};

// Hook để cập nhật sản phẩm
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, productData }: { id: string; productData: Partial<Product> }) =>
      productService.updateProduct(id, productData),
    onSuccess: (updatedProduct) => {
      // Cập nhật cache cho sản phẩm cụ thể
      queryClient.setQueryData(['product', updatedProduct.id], updatedProduct);
      
      // Invalidate các query liên quan
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['featured-products'] });
      queryClient.invalidateQueries({ queryKey: ['new-products'] });
    },
  });
};

// Hook để xóa sản phẩm
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => productService.deleteProduct(id),
    onSuccess: (_, deletedId) => {
      // Xóa sản phẩm khỏi cache
      queryClient.removeQueries({ queryKey: ['product', deletedId] });
      
      // Invalidate các query liên quan
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['featured-products'] });
      queryClient.invalidateQueries({ queryKey: ['new-products'] });
    },
  });
};
