import { CartScreen } from '../../src/screens/cart/CartScreen';

const CartPage = () => {
  const handleBack = () => {
    // Handle back navigation
  };

  const handleCheckout = () => {
    // Handle checkout - navigate to checkout screen
    console.log('Checkout pressed');
  };

  return (
    <CartScreen
      onBack={handleBack}
      onCheckout={handleCheckout}
    />
  );
};

export default CartPage;
