import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import ProductDetailScreen from '../../src/screens/products/ProductDetailScreen';

const ProductDetailPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  return <ProductDetailScreen productId={id} />;
};

export default ProductDetailPage;
