import React from 'react';
import SearchScreen from '../../src/screens/search/SearchScreen';

const SearchPage = () => {
  const handleBack = () => {
    // Handle back navigation
  };

  const handleProductPress = (product: any) => {
    // Handle product press - navigate to product detail
    console.log('Product pressed:', product);
  };

  return (
    <SearchScreen
      onBack={handleBack}
      onProductPress={handleProductPress}
    />
  );
};

export default SearchPage;
