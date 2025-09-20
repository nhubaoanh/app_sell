import React from 'react'
import { View, Text } from 'react-native'
import {Drawer} from "expo-router/drawer"

const DrawerLayout = () => {
  return (
    <Drawer
        screenOptions={{
        headerShown: true,         // hiện header trên cùng
        drawerType: "slide",       // kiểu mở menu (slide hoặc front)
        drawerActiveTintColor: "#007AFF", // màu khi chọn - sử dụng primary color
        drawerInactiveTintColor: "#8E8E93", // màu khi không chọn
        headerTintColor: "#007AFF", // màu header
      }}>
        <Drawer.Screen 
          name="index" 
          options={{
            title: "🏠 Trang chủ",
            drawerLabel: "Trang chủ"
          }}
        />
        <Drawer.Screen 
          name="search" 
          options={{
            title: "🔍 Tìm kiếm",
            drawerLabel: "Tìm kiếm"
          }}
        />
        <Drawer.Screen 
          name="cart" 
          options={{
            title: "🛒 Giỏ hàng",
            drawerLabel: "Giỏ hàng"
          }}
        />
        <Drawer.Screen 
          name="order" 
          options={{
            title: "📋 Đơn hàng",
            drawerLabel: "Đơn hàng"
          }}
        />
        <Drawer.Screen 
          name="profile" 
          options={{
            title: "👤 Hồ sơ",
            drawerLabel: "Hồ sơ"
          }}
        />
    </Drawer>
  )
}

export default DrawerLayout
