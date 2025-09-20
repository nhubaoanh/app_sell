import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../constants/colors';
import { Sizes } from '../../constants/sizes';
import { ProductCard } from '../../components/cards/ProductCard';
import { mockProducts } from '../../lib/utils/mockData';
import { Product } from '../../lib/types/product.types';

const SearchScreen = () => {
  const { query } = useLocalSearchParams<{ query?: string }>();
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000000 });

  const categories = ['all', 'phones', 'laptops', 'accessories', 'tablets', 'smartwatches', 'audio'];
  const brands = ['all', 'Apple', 'Samsung', 'Xiaomi', 'Dell', 'Sony'];

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [query]);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = mockProducts.filter(product => {
      const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase()) ||
                          product.brand.toLowerCase().includes(query.toLowerCase()) ||
                          product.description.toLowerCase().includes(query.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

      return matchesQuery && matchesCategory && matchesBrand && matchesPrice;
    });

    setSearchResults(filtered);
  };

  const handleSearch = () => {
    performSearch(searchQuery);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const handleBrandFilter = (brand: string) => {
    setSelectedBrand(brand);
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const handlePriceRangeChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    setPriceRange(prev => ({
      ...prev,
      [type]: numValue
    }));
  };

  const applyFilters = () => {
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceRange({ min: 0, max: 100000000 });
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const getCategoryName = (categoryId: string) => {
    const categoryMap: { [key: string]: string } = {
      'all': 'Tất cả',
      'phones': 'Điện thoại',
      'laptops': 'Laptop',
      'accessories': 'Phụ kiện',
      'tablets': 'Máy tính bảng',
      'smartwatches': 'Đồng hồ thông minh',
      'audio': 'Âm thanh'
    };
    return categoryMap[categoryId] || categoryId;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Tìm</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Filters */}
        <View style={styles.filtersSection}>
          <Text style={styles.sectionTitle}>Bộ lọc</Text>
          
          {/* Category Filter */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Danh mục</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.filterChip,
                    selectedCategory === category && styles.filterChipSelected
                  ]}
                  onPress={() => handleCategoryFilter(category)}
                >
                  <Text style={[
                    styles.filterChipText,
                    selectedCategory === category && styles.filterChipTextSelected
                  ]}>
                    {getCategoryName(category)}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Brand Filter */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Thương hiệu</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {brands.map((brand) => (
                <TouchableOpacity
                  key={brand}
                  style={[
                    styles.filterChip,
                    selectedBrand === brand && styles.filterChipSelected
                  ]}
                  onPress={() => handleBrandFilter(brand)}
                >
                  <Text style={[
                    styles.filterChipText,
                    selectedBrand === brand && styles.filterChipTextSelected
                  ]}>
                    {brand}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Price Range Filter */}
          <View style={styles.filterGroup}>
            <Text style={styles.filterLabel}>Khoảng giá</Text>
            <View style={styles.priceRangeContainer}>
              <View style={styles.priceInputContainer}>
                <Text style={styles.priceLabel}>Từ</Text>
                <TextInput
                  style={styles.priceInput}
                  placeholder="0"
                  value={priceRange.min.toString()}
                  onChangeText={(value) => handlePriceRangeChange('min', value)}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.priceInputContainer}>
                <Text style={styles.priceLabel}>Đến</Text>
                <TextInput
                  style={styles.priceInput}
                  placeholder="100,000,000"
                  value={priceRange.max.toString()}
                  onChangeText={(value) => handlePriceRangeChange('max', value)}
                  keyboardType="numeric"
                />
              </View>
            </View>
          </View>

          {/* Filter Actions */}
          <View style={styles.filterActions}>
            <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
              <Text style={styles.applyButtonText}>Áp dụng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
              <Text style={styles.clearButtonText}>Xóa bộ lọc</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Results */}
        <View style={styles.resultsSection}>
          <View style={styles.resultsHeader}>
            <Text style={styles.resultsTitle}>
              Kết quả tìm kiếm
              {searchQuery.trim() && ` cho "${searchQuery}"`}
            </Text>
            <Text style={styles.resultsCount}>{searchResults.length} sản phẩm</Text>
          </View>

          {searchResults.length > 0 ? (
            <View style={styles.resultsGrid}>
              {searchResults.map((product) => (
                <View key={product.id} style={styles.resultItem}>
                  <ProductCard product={product} onPress={() => {}} />
                </View>
              ))}
            </View>
          ) : searchQuery.trim() ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🔍</Text>
              <Text style={styles.emptyTitle}>Không tìm thấy sản phẩm</Text>
              <Text style={styles.emptySubtitle}>
                Không có sản phẩm nào phù hợp với từ khóa "{searchQuery}"
              </Text>
            </View>
          ) : (
            <View style={styles.initialState}>
              <Text style={styles.initialIcon}>🔍</Text>
              <Text style={styles.initialTitle}>Bắt đầu tìm kiếm</Text>
              <Text style={styles.initialSubtitle}>
                Nhập từ khóa để tìm kiếm sản phẩm bạn muốn
              </Text>
            </View>
          )}
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
  searchHeader: {
    backgroundColor: Colors.white,
    padding: Sizes.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grayLight,
    borderRadius: Sizes.sm,
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.sm,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: Sizes.sm,
    color: Colors.textSecondary,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  searchButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.sm,
    borderRadius: Sizes.sm,
    marginLeft: Sizes.sm,
  },
  searchButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  filtersSection: {
    backgroundColor: Colors.white,
    padding: Sizes.md,
    marginBottom: Sizes.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: Sizes.md,
  },
  filterGroup: {
    marginBottom: Sizes.md,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Sizes.sm,
  },
  filterChip: {
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.sm,
    borderRadius: Sizes.sm,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: Sizes.sm,
    backgroundColor: Colors.white,
  },
  filterChipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterChipText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  filterChipTextSelected: {
    color: Colors.white,
    fontWeight: '600',
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceInputContainer: {
    flex: 1,
    marginRight: Sizes.sm,
  },
  priceLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: Sizes.xs,
  },
  priceInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Sizes.sm,
    padding: Sizes.sm,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  filterActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Sizes.md,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.sm,
    borderRadius: Sizes.sm,
    flex: 1,
    marginRight: Sizes.sm,
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  clearButton: {
    backgroundColor: Colors.grayLight,
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.sm,
    borderRadius: Sizes.sm,
    flex: 1,
    alignItems: 'center',
  },
  clearButtonText: {
    color: Colors.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },
  resultsSection: {
    flex: 1,
    padding: Sizes.md,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizes.md,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    flex: 1,
  },
  resultsCount: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  resultsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resultItem: {
    width: '48%',
    marginBottom: Sizes.md,
  },
  emptyState: {
    alignItems: 'center',
    padding: Sizes.xl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: Sizes.md,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: Sizes.sm,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  initialState: {
    alignItems: 'center',
    padding: Sizes.xl,
  },
  initialIcon: {
    fontSize: 64,
    marginBottom: Sizes.md,
  },
  initialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: Sizes.sm,
    textAlign: 'center',
  },
  initialSubtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default SearchScreen;
