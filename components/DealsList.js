import React from "react";
import { View, Image, Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
const DealsList = ({ deals, }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {deals.map((item, index) => (
        <Pressable
          onPress={() => navigation.navigate("ProductInfo", {
            id: item.id,
            title: item.title,
            price: item?.price,
            carouselImages: item.carouselImages,
            color: item?.color,
            size: item?.size,
            oldPrice: item?.oldPrice,
            item: item,

          })}
          key={index}
          style={styles.pressable}

        >
          <Image source={{ uri: item.image }} style={styles.image} />

        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  pressable: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
});

export default DealsList;
