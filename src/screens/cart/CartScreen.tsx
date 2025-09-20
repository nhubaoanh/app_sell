import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Colors } from '../../constants/colors';
import { Sizes } from '../../constants/sizes';
import { Button } from '../../components/ui/Button';
import { Product } from '../../lib/types/product.types';

interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: any;
  selectedStorage: any;
}

interface CartScreenProps {
  onBack: () => void;
  onCheckout: () => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  onBack,
  onCheckout,
}) => {
  // Mock cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: '1',
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        price: 29990000,
        originalPrice: 32990000,
        discount: 9,
        thumbnail: 'https://via.placeholder.com/100x100/007AFF/FFFFFF?text=iPhone',
        rating: 4.8,
        reviewCount: 1247,
        inStock: true,
        category: 'iPhone',
        tags: ['iPhone', 'Apple'],
        createdAt: new Date(),
        updatedAt: new Date(),
        model: 'iPhone 15 Pro Max',
        images: [],
        description: '',
        specifications: {
          screen: { size: '6.7 inch', resolution: '2796 x 1290', technology: 'Super Retina XDR OLED' },
          processor: { name: 'A17 Pro', cores: 6, speed: '3.78 GHz' },
          memory: { ram: '8GB', storage: '256GB', expandable: false },
          camera: { main: '48MP f/1.78', front: '12MP f/1.9', features: [] },
          battery: { capacity: '4441 mAh', fastCharging: true, wirelessCharging: true },
          connectivity: { network: ['5G'], wifi: 'Wi-Fi 6E', bluetooth: 'Bluetooth 5.3', usb: 'USB-C' },
          dimensions: { height: '159.9 mm', width: '76.7 mm', thickness: '8.25 mm', weight: '221 g' },
          os: 'iOS 17',
          security: ['Face ID'],
        },
        colors: [],
        storage: [],
      },
      quantity: 1,
      selectedColor: { name: 'Titan tự nhiên', code: '#F5F5DC' },
      selectedStorage: { size: '256GB', price: 29990000 },
    },
    {
      product: {
        id: '2',
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        price: 26990000,
        originalPrice: 28990000,
        discount: 7,
        thumbnail: 'https://via.placeholder.com/100x100/1428A0/FFFFFF?text=Samsung',
        rating: 4.7,
        reviewCount: 892,
        inStock: true,
        category: 'Samsung',
        tags: ['Samsung', 'Galaxy'],
        createdAt: new Date(),
        updatedAt: new Date(),
        model: 'Galaxy S24 Ultra',
        images: [],
        description: '',
        specifications: {
          screen: { size: '6.8 inch', resolution: '3088 x 1440', technology: 'Dynamic AMOLED 2X' },
          processor: { name: 'Snapdragon 8 Gen 3', cores: 8, speed: '3.39 GHz' },
          memory: { ram: '12GB', storage: '256GB', expandable: true },
          camera: { main: '200MP f/1.7', front: '12MP f/2.2', features: [] },
          battery: { capacity: '5000 mAh', fastCharging: true, wirelessCharging: true },
          connectivity: { network: ['5G'], wifi: 'Wi-Fi 7', bluetooth: 'Bluetooth 5.3', usb: 'USB-C' },
          dimensions: { height: '163.4 mm', width: '79.0 mm', thickness: '8.6 mm', weight: '232 g' },
          os: 'Android 14',
          security: ['Fingerprint sensor'],
        },
        colors: [],
        storage: [],
      },
      quantity: 2,
      selectedColor: { name: 'Titanium Gray', code: '#808080' },
      selectedStorage: { size: '256GB', price: 26990000 },
    },
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };

  const removeItem = (index: number) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có muốn xóa sản phẩm này khỏi giỏ hàng?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Xóa',
          style: 'destructive',
          onPress: () => {
            const newCartItems = cartItems.filter((_, i) => i !== index);
            setCartItems(newCartItems);
          },
        },
      ]
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.selectedStorage.price * item.quantity);
    }, 0);
  };

  const calculateDiscount = () => {
    return cartItems.reduce((total, item) => {
      if (item.product.originalPrice) {
        return total + ((item.product.originalPrice - item.product.price) * item.quantity);
      }
      return total;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Giỏ hàng</Text>
      <TouchableOpacity style={styles.clearButton} onPress={() => setCartItems([])}>
        <Text style={styles.clearButtonText}>Xóa tất cả</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = (item: CartItem, index: number) => (
    <View key={index} style={styles.cartItem}>
      <Image source={{ uri: item.product.thumbnail }} style={styles.itemImage} />
      
      <View style={styles.itemInfo}>
        <Text style={styles.itemBrand}>{item.product.brand}</Text>
        <Text style={styles.itemName} numberOfLines={2}>
          {item.product.name}
        </Text>
        
        <View style={styles.itemOptions}>
          <Text style={styles.itemOption}>
            Màu: {item.selectedColor.name}
          </Text>
          <Text style={styles.itemOption}>
            Dung lượng: {item.selectedStorage.size}
          </Text>
        </View>
        
        <View style={styles.itemPrice}>
          <Text style={styles.currentPrice}>
            {formatPrice(item.selectedStorage.price)}
          </Text>
          {item.product.originalPrice && (
            <Text style={styles.originalPrice}>
              {formatPrice(item.product.originalPrice)}
            </Text>
          )}
        </View>
      </View>
      
      <View style={styles.itemActions}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(index, item.quantity - 1)}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          
          <Text style={styles.quantityText}>{item.quantity}</Text>
          
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => updateQuantity(index, item.quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeItem(index)}
        >
          <Text style={styles.removeButtonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartIcon}>🛒</Text>
          <Text style={styles.emptyCartTitle}>Giỏ hàng trống</Text>
          <Text style={styles.emptyCartSubtitle}>
            Bạn chưa có sản phẩm nào trong giỏ hàng
          </Text>
          <Button
            title="Tiếp tục mua sắm"
            onPress={onBack}
            variant="primary"
            size="medium"
            style={styles.continueShoppingButton}
          />
        </View>
      );
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item, index) => renderCartItem(item, index))}
      </ScrollView>
    );
  };

  const renderOrderSummary = () => {
    if (cartItems.length === 0) return null;

    return (
      <View style={styles.orderSummary}>
        <Text style={styles.summaryTitle}>Tóm tắt đơn hàng</Text>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tạm tính ({cartItems.length} sản phẩm)</Text>
          <Text style={styles.summaryValue}>{formatPrice(calculateSubtotal())}</Text>
        </View>
        
        {calculateDiscount() > 0 && (
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Giảm giá</Text>
            <Text style={[styles.summaryValue, styles.discountValue]}>
              -{formatPrice(calculateDiscount())}
            </Text>
          </View>
        )}
        
        <View style={styles.summaryDivider} />
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tổng cộng</Text>
          <Text style={[styles.summaryValue, styles.totalValue]}>
            {formatPrice(calculateTotal())}
          </Text>
        </View>
      </View>
    );
  };

  const renderActionButtons = () => {
    if (cartItems.length === 0) return null;

    return (
      <View style={styles.actionButtons}>
        <Button
          title="Tiếp tục mua sắm"
          onPress={onBack}
          variant="outline"
          size="large"
          fullWidth
          style={styles.continueShoppingButton}
        />
        
        <Button
          title="Thanh toán"
          onPress={onCheckout}
          variant="primary"
          size="large"
          fullWidth
          style={styles.checkoutButton}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      
      <View style={styles.content}>
        {renderCartItems()}
      </View>
      
      {renderOrderSummary()}
      {renderActionButtons()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.screenPadding,
    paddingVertical: Sizes.md,
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  
  backButton: {
    padding: Sizes.sm,
  },
  
  backIcon: {
    fontSize: Sizes.iconLg,
    color: Colors.textPrimary,
  },
  
  headerTitle: {
    fontSize: Sizes.fontSizeLg,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  
  clearButton: {
    padding: Sizes.sm,
  },
  
  clearButtonText: {
    fontSize: Sizes.fontSizeSm,
    color: Colors.error,
    fontWeight: '600',
  },
  
  content: {
    flex: 1,
    paddingHorizontal: Sizes.screenPadding,
    paddingTop: Sizes.md,
  },
  
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.screenPadding,
  },
  
  emptyCartIcon: {
    fontSize: Sizes.iconXxl * 2,
    marginBottom: Sizes.lg,
  },
  
  emptyCartTitle: {
    fontSize: Sizes.fontSizeXl,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: Sizes.sm,
    textAlign: 'center',
  },
  
  emptyCartSubtitle: {
    fontSize: Sizes.fontSizeMd,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Sizes.lg,
    lineHeight: Sizes.lineHeightMd,
  },
  
  continueShoppingButton: {
    marginBottom: Sizes.md,
  },
  
  cartItem: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: Sizes.radiusMd,
    padding: Sizes.md,
    marginBottom: Sizes.md,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: Sizes.radiusSm,
    marginRight: Sizes.md,
  },
  
  itemInfo: {
    flex: 1,
    marginRight: Sizes.sm,
  },
  
  itemBrand: {
    fontSize: Sizes.fontSizeXs,
    color: Colors.primary,
    fontWeight: '600',
    marginBottom: Sizes.xs,
  },
  
  itemName: {
    fontSize: Sizes.fontSizeSm,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Sizes.xs,
    lineHeight: Sizes.lineHeightSm,
  },
  
  itemOptions: {
    marginBottom: Sizes.xs,
  },
  
  itemOption: {
    fontSize: Sizes.fontSizeXs,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  
  itemPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  currentPrice: {
    fontSize: Sizes.fontSizeMd,
    fontWeight: '700',
    color: Colors.primary,
    marginRight: Sizes.xs,
  },
  
  originalPrice: {
    fontSize: Sizes.fontSizeSm,
    color: Colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  
  itemActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grayLight,
    borderRadius: Sizes.radiusSm,
    paddingHorizontal: Sizes.xs,
    marginBottom: Sizes.sm,
  },
  
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: Sizes.radiusSm,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  quantityButtonText: {
    fontSize: Sizes.fontSizeSm,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  
  quantityText: {
    fontSize: Sizes.fontSizeSm,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginHorizontal: Sizes.sm,
    minWidth: 20,
    textAlign: 'center',
  },
  
  removeButton: {
    padding: Sizes.xs,
  },
  
  removeButtonText: {
    fontSize: Sizes.iconMd,
  },
  
  orderSummary: {
    backgroundColor: Colors.surface,
    padding: Sizes.screenPadding,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  
  summaryTitle: {
    fontSize: Sizes.fontSizeLg,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Sizes.md,
  },
  
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Sizes.sm,
  },
  
  summaryLabel: {
    fontSize: Sizes.fontSizeMd,
    color: Colors.textSecondary,
  },
  
  summaryValue: {
    fontSize: Sizes.fontSizeMd,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  
  discountValue: {
    color: Colors.success,
  },
  
  totalValue: {
    fontSize: Sizes.fontSizeLg,
    color: Colors.primary,
  },
  
  summaryDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: Sizes.md,
  },
  
  actionButtons: {
    padding: Sizes.screenPadding,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  
  checkoutButton: {
    marginBottom: Sizes.sm,
  },
});
