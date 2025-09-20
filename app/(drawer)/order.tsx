import React from 'react';
import { OrderListScreen } from '../../src/screens/orders/OrderListScreen';

const OrderPage = () => {
  const handleBack = () => {
    // Handle back navigation
  };

  const handleOrderDetail = (order: any) => {
    // Handle order detail - navigate to order detail screen
    console.log('Order detail pressed:', order);
  };

  return (
    <OrderListScreen
      onBack={handleBack}
      onOrderDetail={handleOrderDetail}
    />
  );
};

export default OrderPage;
