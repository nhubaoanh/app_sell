import { Product } from '../types/product.types';

export const mockProducts: Product[] = [
  // Điện thoại
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    price: 29990000,
    originalPrice: 32990000,
    discount: 9,
    images: [
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=iPhone+15+Pro+Max',
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=iPhone+15+Pro+Max+2',
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=iPhone+15+Pro+Max+3',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/007AFF/FFFFFF?text=iPhone+15+Pro+Max',
    description: 'iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, camera 48MP, màn hình 6.7 inch Super Retina XDR OLED.',
    specifications: {
      screen: { size: '6.7 inch', resolution: '2796 x 1290', technology: 'Super Retina XDR OLED' },
      processor: { name: 'A17 Pro', cores: 6, speed: '3.78 GHz' },
      memory: { ram: '8GB', storage: '256GB', expandable: false },
      camera: { main: '48MP f/1.78', ultraWide: '12MP f/2.2', telephoto: '12MP f/2.8', front: '12MP f/1.9', features: ['Night mode', 'Portrait mode', 'Cinematic mode'] },
      battery: { capacity: '4441 mAh', fastCharging: true, wirelessCharging: true },
      connectivity: { network: ['5G', '4G LTE'], wifi: 'Wi-Fi 6E', bluetooth: 'Bluetooth 5.3', usb: 'USB-C' },
      dimensions: { height: '159.9 mm', width: '76.7 mm', thickness: '8.25 mm', weight: '221 g' },
      os: 'iOS 17',
      security: ['Face ID', 'Touch ID']
    },
    colors: [
      { name: 'Titan tự nhiên', code: '#F5F5DC', available: true },
      { name: 'Titan xanh', code: '#4682B4', available: true },
      { name: 'Titan trắng', code: '#FFFFFF', available: true },
      { name: 'Titan đen', code: '#000000', available: true },
    ],
    storage: [
      { size: '256GB', price: 29990000, available: true },
      { size: '512GB', price: 33990000, available: true },
      { size: '1TB', price: 37990000, available: true },
    ],
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    isNew: true,
    isFeatured: true,
    category: 'iPhone',
    tags: ['iPhone', 'Apple', 'Pro', 'Max', '5G'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    price: 26990000,
    originalPrice: 28990000,
    discount: 7,
    images: [
      'https://via.placeholder.com/400x400/1428A0/FFFFFF?text=Galaxy+S24+Ultra',
      'https://via.placeholder.com/400x400/1428A0/FFFFFF?text=Galaxy+S24+Ultra+2',
      'https://via.placeholder.com/400x400/1428A0/FFFFFF?text=Galaxy+S24+Ultra+3',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/1428A0/FFFFFF?text=Galaxy+S24+Ultra',
    description: 'Samsung Galaxy S24 Ultra với S Pen tích hợp, camera 200MP, màn hình 6.8 inch Dynamic AMOLED 2X.',
    specifications: {
      screen: { size: '6.8 inch', resolution: '3088 x 1440', technology: 'Dynamic AMOLED 2X' },
      processor: { name: 'Snapdragon 8 Gen 3', cores: 8, speed: '3.39 GHz' },
      memory: { ram: '12GB', storage: '256GB', expandable: true },
      camera: { main: '200MP f/1.7', ultraWide: '12MP f/2.2', telephoto: '50MP f/3.4', front: '12MP f/2.2', features: ['Night mode', 'Portrait mode', '8K video'] },
      battery: { capacity: '5000 mAh', fastCharging: true, wirelessCharging: true },
      connectivity: { network: ['5G', '4G LTE'], wifi: 'Wi-Fi 7', bluetooth: 'Bluetooth 5.3', usb: 'USB-C' },
      dimensions: { height: '163.4 mm', width: '79.0 mm', thickness: '8.6 mm', weight: '232 g' },
      os: 'Android 14',
      security: ['Fingerprint sensor', 'Face recognition']
    },
    colors: [
      { name: 'Titanium Gray', code: '#808080', available: true },
      { name: 'Titanium Black', code: '#000000', available: true },
      { name: 'Titanium Violet', code: '#8A2BE2', available: true },
      { name: 'Titanium Yellow', code: '#FFD700', available: true },
    ],
    storage: [
      { size: '256GB', price: 26990000, available: true },
      { size: '512GB', price: 29990000, available: true },
      { size: '1TB', price: 33990000, available: true },
    ],
    rating: 4.7,
    reviewCount: 892,
    inStock: true,
    isNew: true,
    isFeatured: true,
    category: 'Samsung',
    tags: ['Samsung', 'Galaxy', 'Ultra', 'S Pen', '5G'],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    model: '14 Ultra',
    price: 19990000,
    originalPrice: 21990000,
    discount: 9,
    images: [
      'https://via.placeholder.com/400x400/FF6B35/FFFFFF?text=Xiaomi+14+Ultra',
      'https://via.placeholder.com/400x400/FF6B35/FFFFFF?text=Xiaomi+14+Ultra+2',
      'https://via.placeholder.com/400x400/FF6B35/FFFFFF?text=Xiaomi+14+Ultra+3',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/FF6B35/FFFFFF?text=Xiaomi+14+Ultra',
    description: 'Xiaomi 14 Ultra với camera Leica 50MP, chip Snapdragon 8 Gen 3, màn hình 6.73 inch AMOLED.',
    specifications: {
      screen: { size: '6.73 inch', resolution: '3200 x 1440', technology: 'AMOLED' },
      processor: { name: 'Snapdragon 8 Gen 3', cores: 8, speed: '3.3 GHz' },
      memory: { ram: '16GB', storage: '512GB', expandable: false },
      camera: { main: '50MP f/1.63', ultraWide: '50MP f/1.95', telephoto: '50MP f/2.51', front: '32MP f/2.0', features: ['Leica optics', 'Night mode', '4K video'] },
      battery: { capacity: '5000 mAh', fastCharging: true, wirelessCharging: true },
      connectivity: { network: ['5G', '4G LTE'], wifi: 'Wi-Fi 7', bluetooth: 'Bluetooth 5.4', usb: 'USB-C' },
      dimensions: { height: '161.4 mm', width: '75.3 mm', thickness: '9.2 mm', weight: '224.4 g' },
      os: 'HyperOS',
      security: ['Fingerprint sensor', 'Face recognition']
    },
    colors: [
      { name: 'Black', code: '#000000', available: true },
      { name: 'White', code: '#FFFFFF', available: true },
      { name: 'Blue', code: '#0000FF', available: true },
    ],
    storage: [
      { size: '512GB', price: 19990000, available: true },
      { size: '1TB', price: 22990000, available: true },
    ],
    rating: 4.6,
    reviewCount: 567,
    inStock: true,
    isNew: true,
    isFeatured: false,
    category: 'Xiaomi',
    tags: ['Xiaomi', 'Ultra', 'Leica', '5G'],
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25')
  },
  // Laptop
  {
    id: '4',
    name: 'MacBook Pro 14" M3 Pro',
    brand: 'Apple',
    model: 'MacBook Pro 14" M3 Pro',
    price: 45990000,
    originalPrice: 47990000,
    discount: 4,
    images: [
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=MacBook+Pro+14',
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=MacBook+Pro+14+2',
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=MacBook+Pro+14+3',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/007AFF/FFFFFF?text=MacBook+Pro+14',
    description: 'MacBook Pro 14" với chip M3 Pro mạnh mẽ, màn hình Liquid Retina XDR, hiệu suất vượt trội.',
    specifications: {
      screen: { size: '14.2 inch', resolution: '3024 x 1964', technology: 'Liquid Retina XDR' },
      processor: { name: 'M3 Pro', cores: 12, speed: '4.05 GHz' },
      memory: { ram: '18GB', storage: '512GB', expandable: false },
      camera: { main: 'N/A', ultraWide: 'N/A', telephoto: 'N/A', front: '1080p', features: ['FaceTime HD'] },
      battery: { capacity: '72.4 Wh', fastCharging: true, wirelessCharging: false },
      connectivity: { network: ['Wi-Fi 6E'], wifi: 'Wi-Fi 6E', bluetooth: '5.3', usb: 'Thunderbolt 4' },
      dimensions: { height: '312.6 mm', width: '221.2 mm', thickness: '15.5 mm', weight: '1.61 kg' },
      os: 'macOS Sonoma',
      security: ['Touch ID', 'Secure Enclave']
    },
    colors: [
      { name: 'Space Gray', code: '#4A4A4A', available: true },
      { name: 'Silver', code: '#C0C0C0', available: true }
    ],
    storage: [
      { size: '512GB', price: 45990000, available: true },
      { size: '1TB', price: 49990000, available: true },
      { size: '2TB', price: 55990000, available: true }
    ],
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    isNew: true,
    isFeatured: true,
    category: 'laptops',
    tags: ['MacBook', 'Apple', 'M3 Pro', 'Professional'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '5',
    name: 'Dell XPS 13 Plus',
    brand: 'Dell',
    model: 'XPS 13 Plus',
    price: 32990000,
    originalPrice: 34990000,
    discount: 6,
    images: [
      'https://via.placeholder.com/400x400/007DB8/FFFFFF?text=Dell+XPS+13+Plus',
      'https://via.placeholder.com/400x400/007DB8/FFFFFF?text=Dell+XPS+13+Plus+2',
      'https://via.placeholder.com/400x400/007DB8/FFFFFF?text=Dell+XPS+13+Plus+3',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/007DB8/FFFFFF?text=Dell+XPS+13+Plus',
    description: 'Dell XPS 13 Plus với thiết kế siêu mỏng, màn hình 13.4 inch OLED, hiệu suất cao.',
    specifications: {
      screen: { size: '13.4 inch', resolution: '3456 x 2160', technology: 'OLED' },
      processor: { name: 'Intel Core i7-1360P', cores: 14, speed: '4.7 GHz' },
      memory: { ram: '16GB', storage: '512GB', expandable: false },
      camera: { main: 'N/A', ultraWide: 'N/A', telephoto: 'N/A', front: '720p', features: ['Windows Hello'] },
      battery: { capacity: '55 Wh', fastCharging: true, wirelessCharging: false },
      connectivity: { network: ['Wi-Fi 6E'], wifi: 'Wi-Fi 6E', bluetooth: '5.2', usb: 'Thunderbolt 4' },
      dimensions: { height: '295.4 mm', width: '199.4 mm', thickness: '15.28 mm', weight: '1.2 kg' },
      os: 'Windows 11 Pro',
      security: ['Windows Hello', 'Fingerprint Reader']
    },
    colors: [
      { name: 'Platinum Silver', code: '#C0C0C0', available: true },
      { name: 'Graphite', code: '#4A4A4A', available: true }
    ],
    storage: [
      { size: '512GB', price: 32990000, available: true },
      { size: '1TB', price: 35990000, available: true },
      { size: '2TB', price: 39990000, available: true }
    ],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    isNew: false,
    isFeatured: false,
    category: 'laptops',
    tags: ['Dell', 'XPS', 'Intel', 'Ultrabook'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  // AirPods và phụ kiện âm thanh
  {
    id: '6',
    name: 'AirPods Pro 2',
    brand: 'Apple',
    model: 'AirPods Pro 2',
    price: 5990000,
    originalPrice: 6490000,
    discount: 8,
    images: [
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=AirPods+Pro+2',
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=AirPods+Pro+2+2',
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=AirPods+Pro+2+3',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/007AFF/FFFFFF?text=AirPods+Pro+2',
    description: 'AirPods Pro 2 với chống ồn chủ động, âm thanh không gian, sạc không dây.',
    specifications: {
      screen: { size: 'N/A', resolution: 'N/A', technology: 'N/A' },
      processor: { name: 'H2', cores: 1, speed: 'N/A' },
      memory: { ram: 'N/A', storage: 'N/A', expandable: false },
      camera: { main: 'N/A', ultraWide: 'N/A', telephoto: 'N/A', front: 'N/A', features: ['Noise Cancellation'] },
      battery: { capacity: '6 giờ', fastCharging: true, wirelessCharging: true },
      connectivity: { network: ['N/A'], wifi: 'N/A', bluetooth: '5.3', usb: 'Lightning' },
      dimensions: { height: '30.9 mm', width: '21.8 mm', thickness: '24.0 mm', weight: '5.3 g' },
      os: 'iOS 16.1+',
      security: ['Find My', 'iCloud']
    },
    colors: [
      { name: 'Trắng', code: '#FFFFFF', available: true }
    ],
    storage: [
      { size: 'Standard', price: 5990000, available: true }
    ],
    rating: 4.8,
    reviewCount: 892,
    inStock: true,
    isNew: false,
    isFeatured: true,
    category: 'audio',
    tags: ['AirPods', 'Apple', 'Wireless', 'Noise Cancellation'],
    createdAt: new Date('2023-12-15'),
    updatedAt: new Date('2023-12-15')
  },
  {
    id: '7',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    model: 'WH-1000XM5',
    price: 8990000,
    originalPrice: 9990000,
    discount: 10,
    images: [
      'https://via.placeholder.com/400x400/000000/FFFFFF?text=Sony+WH-1000XM5',
      'https://via.placeholder.com/400x400/000000/FFFFFF?text=Sony+WH-1000XM5+2',
      'https://via.placeholder.com/400x400/000000/FFFFFF?text=Sony+WH-1000XM5+3',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/000000/FFFFFF?text=Sony+WH-1000XM5',
    description: 'Sony WH-1000XM5 với chống ồn hàng đầu thế giới, âm thanh chất lượng cao, pin 30 giờ.',
    specifications: {
      screen: { size: 'N/A', resolution: 'N/A', technology: 'N/A' },
      processor: { name: 'V1', cores: 1, speed: 'N/A' },
      memory: { ram: 'N/A', storage: 'N/A', expandable: false },
      camera: { main: 'N/A', ultraWide: 'N/A', telephoto: 'N/A', front: 'N/A', features: ['Noise Cancellation'] },
      battery: { capacity: '30 giờ', fastCharging: true, wirelessCharging: false },
      connectivity: { network: ['N/A'], wifi: 'N/A', bluetooth: '5.2', usb: 'USB-C' },
      dimensions: { height: '248 mm', width: '185 mm', thickness: '25 mm', weight: '250 g' },
      os: 'Multi-platform',
      security: ['N/A']
    },
    colors: [
      { name: 'Đen', code: '#000000', available: true },
      { name: 'Bạc', code: '#C0C0C0', available: true }
    ],
    storage: [
      { size: 'Standard', price: 8990000, available: true }
    ],
    rating: 4.9,
    reviewCount: 567,
    inStock: true,
    isNew: false,
    isFeatured: false,
    category: 'audio',
    tags: ['Sony', 'Headphones', 'Noise Cancellation', 'Premium'],
    createdAt: new Date('2023-11-20'),
    updatedAt: new Date('2023-11-20')
  },
  // Phụ kiện điện thoại
  {
    id: '8',
    name: 'Sạc không dây MagSafe',
    brand: 'Apple',
    model: 'MagSafe Charger',
    price: 990000,
    originalPrice: 1190000,
    discount: 17,
    images: [
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=MagSafe+Charger',
      'https://via.placeholder.com/400x400/007AFF/FFFFFF?text=MagSafe+Charger+2',
    ],
    thumbnail: 'https://via.placeholder.com/150x150/007AFF/FFFFFF?text=MagSafe+Charger',
    description: 'Sạc không dây MagSafe với công suất 15W, tương thích với iPhone 12 trở lên.',
    specifications: {
      screen: { size: 'N/A', resolution: 'N/A', technology: 'N/A' },
      processor: { name: 'N/A', cores: 0, speed: 'N/A' },
      memory: { ram: 'N/A', storage: 'N/A', expandable: false },
      camera: { main: 'N/A', ultraWide: 'N/A', telephoto: 'N/A', front: 'N/A', features: ['Wireless Charging'] },
      battery: { capacity: 'N/A', fastCharging: true, wirelessCharging: true },
      connectivity: { network: ['N/A'], wifi: 'N/A', bluetooth: 'N/A', usb: 'USB-C' },
      dimensions: { height: '35 mm', width: '35 mm', thickness: '5.7 mm', weight: '58 g' },
      os: 'Multi-platform',
      security: ['N/A']
    },
    colors: [
      { name: 'Trắng', code: '#FFFFFF', available: true }
    ],
    storage: [
      { size: 'Standard', price: 990000, available: true }
    ],
    rating: 4.5,
    reviewCount: 234,
    inStock: true,
    isNew: false,
    isFeatured: false,
    category: 'accessories',
    tags: ['Apple', 'MagSafe', 'Wireless Charging', 'iPhone'],
    createdAt: new Date('2023-10-15'),
    updatedAt: new Date('2023-10-15')
  }
]