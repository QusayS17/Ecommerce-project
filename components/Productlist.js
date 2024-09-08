import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from "../components/ProductItem";
const productlist = () => {
  const [products, setProducts] = useState([]); // Holds the current batch of products
  const [page, setPage] = useState(1); // Keeps track of the current page
  const [isLoading, setIsLoading] = useState(false); // To show loading spinner
  const [isEndReached, setIsEndReached] = useState(false); // Track if there's more data

  useEffect(() => {
    fetchData(); // Fetch data on initial render
  }, []);

  const fetchData = async () => {
    setIsLoading(true); // Show loading spinner
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const newProducts = response.data;

      if (newProducts.length > 0) {
        setProducts(newProducts); // Replace current array with new products
      } else {
        setIsEndReached(true); // No more data to load
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    }
    setIsLoading(false); // Hide loading spinner
  };

  const loadMoreItems = () => {
    if (!isEndReached && !isLoading) {
      setPage(prevPage => prevPage + 1); // Increment the page to get new items
      fetchData(); // Fetch the next set of 6 items
    }
  };

  const renderFooter = () => {
    return isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null; // Show loading spinner
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products} // Display the current batch of products
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreItems} // Trigger load more items
        onEndReachedThreshold={0.5} // Trigger earlier for smoother loading
        numColumns={2} // Show 2 items per row
        ListFooterComponent={renderFooter} // Add loading spinner at the bottom
      />
    </View>
  );
}

export default productlist



const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});

