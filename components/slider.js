import React, { useState, useEffect, useRef } from "react";
import { FlatList, Image, View, StyleSheet, Dimensions } from "react-native";

// Get screen dimensions for responsive sizing
const { width, height } = Dimensions.get("window");

export default function AutoImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  // Automatically slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

    // Scroll to the next image
    flatListRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
    });

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={images}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      pagingEnabled // Makes sure only one image is shown at a time
      scrollEnabled={false} // Disable manual scrolling
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: width, // Responsive width for the image container
    height: height * 0.25, // 25% of screen height, you can adjust this
  },
  image: {
    width: "100%", // Full width of the container
    height: "100%", // Full height of the container
  },
});
