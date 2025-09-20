# 📱 Dự Án Bán Điện Thoại

Ứng dụng React Native bán điện thoại di động với giao diện hiện đại và dễ sử dụng.

## 🏗️ Cấu Trúc Thư Mục

```
shop/
├── app/                    # Định tuyến và màn hình chính
│   ├── (drawer)/          # Navigation drawer
│   ├── products/          # Màn hình sản phẩm
│   └── _layout.tsx        # Layout chính
├── components/             # Components tái sử dụng
│   ├── ui/                # UI components cơ bản
│   ├── forms/             # Form components
│   ├── cards/             # Card components
│   └── modals/            # Modal components
├── features/               # Tính năng chính
│   ├── auth/              # Xác thực người dùng
│   ├── products/          # Quản lý sản phẩm
│   ├── cart/              # Giỏ hàng
│   ├── orders/            # Đơn hàng
│   ├── profile/           # Hồ sơ người dùng
│   └── search/            # Tìm kiếm
├── lib/                    # Thư viện và utilities
│   ├── api/               # API calls
│   ├── database/          # Database schemas
│   ├── utils/             # Helper functions
│   └── types/             # TypeScript types
├── constants/              # Hằng số và cấu hình
├── hooks/                  # Custom hooks
├── assets/                 # Tài nguyên tĩnh
└── services/               # Business logic services
```

## 🚀 Tính Năng Chính

- 🔐 Xác thực người dùng
- 📱 Quản lý sản phẩm điện thoại
- 🛒 Giỏ hàng và thanh toán
- 📋 Quản lý đơn hàng
- 🔍 Tìm kiếm và lọc sản phẩm
- 👤 Hồ sơ người dùng
- 💳 Quản lý thanh toán

## 🛠️ Cài Đặt

```bash
npm install
npx expo start
```

## 📱 Công Nghệ Sử Dụng

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- React Query (nếu cần)
