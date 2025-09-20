import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';
import { Sizes } from '../../constants/sizes';
import { Product } from '../../lib/types/product.types';

const { width } = Dimensions.get('window');

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
        
        {product.discount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{product.discount}%</Text>
          </View>
        )}
        
        {product.isNew && (
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>MỚI</Text>
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {product.rating}</Text>
          <Text style={styles.reviewCount}>({product.reviewCount})</Text>
        </View>
        
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{formatPrice(product.price)}</Text>
          {product.originalPrice && (
            <Text style={styles.originalPrice}>{formatPrice(product.originalPrice)}</Text>
          )}
        </View>
        
        <View style={styles.stockStatus}>
          <Text style={[
            styles.stockText,
            { color: product.inStock ? Colors.success : Colors.error }
          ]}>
            {product.inStock ? 'Còn hàng' : 'Hết hàng'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Sizes.md,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: Sizes.sm,
    left: Sizes.sm,
    backgroundColor: Colors.error,
    paddingHorizontal: Sizes.xs,
    paddingVertical: 2,
    borderRadius: Sizes.sm,
  },
  discountText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  newBadge: {
    position: 'absolute',
    top: Sizes.sm,
    right: Sizes.sm,
    backgroundColor: Colors.success,
    paddingHorizontal: Sizes.xs,
    paddingVertical: 2,
    borderRadius: Sizes.sm,
  },
  newBadgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    padding: Sizes.sm,
  },
  brand: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Sizes.xs,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Sizes.xs,
    lineHeight: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.xs,
  },
  rating: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginRight: Sizes.xs,
  },
  reviewCount: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.xs,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginRight: Sizes.xs,
  },
  originalPrice: {
    fontSize: 14,
    color: Colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  stockStatus: {
    alignItems: 'flex-start',
  },
  stockText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
