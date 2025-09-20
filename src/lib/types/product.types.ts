export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  thumbnail: string;
  description: string;
  specifications: ProductSpecifications;
  colors: ProductColor[];
  storage: ProductStorage[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductSpecifications {
  screen: {
    size: string;
    resolution: string;
    technology: string;
    refreshRate?: string;
  };
  processor: {
    name: string;
    cores: number;
    speed: string;
  };
  memory: {
    ram: string;
    storage: string;
    expandable: boolean;
  };
  camera: {
    main: string;
    ultraWide?: string;
    telephoto?: string;
    front: string;
    features: string[];
  };
  battery: {
    capacity: string;
    fastCharging: boolean;
    wirelessCharging: boolean;
  };
  connectivity: {
    network: string[];
    wifi: string;
    bluetooth: string;
    usb: string;
  };
  dimensions: {
    height: string;
    width: string;
    thickness: string;
    weight: string;
  };
  os: string;
  security: string[];
}

export interface ProductColor {
  name: string;
  code: string;
  available: boolean;
}

export interface ProductStorage {
  size: string;
  price: number;
  available: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  subcategories?: ProductCategory[];
}

export interface ProductFilter {
  brand?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  category?: string[];
  rating?: number;
  inStock?: boolean;
  features?: string[];
}

export interface ProductSort {
  field: 'price' | 'rating' | 'name' | 'createdAt';
  order: 'asc' | 'desc';
}
