import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { Colors } from '../../constants/colors';
import { Sizes } from '../../constants/sizes';
import { Button } from '../../components/ui/Button';
import {ProductCard} from '../../components/cards/ProductCard';
import { mockProducts } from '../../lib/utils/mockData';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleProductPress = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleCategoryPress = (category: string) => {
    router.push(`/category/${category}`);
  };

  const handleSearchPress = () => {
    router.push('/search');
  };

  const handleCartPress = () => {
    router.push('/cart');
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      router.push({
        pathname: '/search',
        params: { query: searchQuery.trim() }
      });
    }
  };

  const categories = [
    { id: 'phones', name: 'Điện thoại', icon: '📱', color: '#007AFF' },
    { id: 'laptops', name: 'Laptop', icon: '💻', color: '#34C759' },
    { id: 'accessories', name: 'Phụ kiện', icon: '🎧', color: '#FF9500' },
    { id: 'tablets', name: 'Máy tính bảng', icon: '📱', color: '#AF52DE' },
    { id: 'smartwatches', name: 'Đồng hồ thông minh', icon: '⌚', color: '#FF3B30' },
    { id: 'audio', name: 'Âm thanh', icon: '🔊', color: '#5856D6' },
  ];

  const featuredProducts = mockProducts.filter(product => product.isFeatured);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Search */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.welcomeText}>Chào mừng bạn!</Text>
          <TouchableOpacity onPress={handleCartPress} style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress={handleSearchPress} style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchPlaceholder}>Tìm kiếm sản phẩm...</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Banner Slider */}
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>Khuyến mãi lớn!</Text>
            <Text style={styles.bannerSubtitle}>Giảm giá lên đến 50%</Text>
            <Button 
              title="Xem ngay" 
              onPress={() => {}} 
              variant="primary"
              size="small"
            />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Danh mục sản phẩm</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[styles.categoryItem, { backgroundColor: category.color + '20' }]}
                onPress={() => handleCategoryPress(category.id)}
              >
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={[styles.categoryName, { color: category.color }]}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sản phẩm nổi bật</Text>
            <TouchableOpacity onPress={() => router.push('/products' as any)}>
              <Text style={styles.seeAllText}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredProducts.map((product) => (
              <View key={product.id} style={styles.productContainer}>
                <ProductCard 
                  product={product} 
                  onPress={() => handleProductPress(product.id)}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* New Arrivals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sản phẩm mới</Text>
          <View style={styles.productsGrid}>
            {mockProducts.slice(0, 4).map((product) => (
              <View key={product.id} style={styles.productGridItem}>
                <ProductCard 
                  product={product} 
                  onPress={() => handleProductPress(product.id)}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Sizes.md,
    paddingTop: Sizes.sm,
    paddingBottom: Sizes.md,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizes.sm,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.white,
  },
  cartButton: {
    position: 'relative',
    padding: Sizes.sm,
  },
  cartIcon: {
    fontSize: 24,
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Sizes.sm,
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.sm,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: Sizes.sm,
    color: Colors.textSecondary,
  },
  searchPlaceholder: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  bannerContainer: {
    padding: Sizes.md,
  },
  banner: {
    backgroundColor: Colors.primary,
    borderRadius: Sizes.md,
    padding: Sizes.lg,
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: Sizes.xs,
  },
  bannerSubtitle: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: Sizes.md,
  },
  section: {
    padding: Sizes.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizes.md,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: Sizes.md,
  },
  seeAllText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: (width - Sizes.md * 3) / 3,
    aspectRatio: 1,
    borderRadius: Sizes.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Sizes.sm,
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: Sizes.xs,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  productContainer: {
    marginRight: Sizes.md,
    width: 160,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productGridItem: {
    width: (width - Sizes.md * 3) / 2,
    marginBottom: Sizes.md,
  },
});

export default HomeScreen;
