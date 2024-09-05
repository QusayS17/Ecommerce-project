import React from "react";
import { View, Image, Pressable, StyleSheet ,Text} from "react-native";

const DealsList = ({ deals, onPressDeal }) => {
  return (
    <View style={styles.container}>
      {deals.map((item, index) => (
        <Pressable
          key={index}
          style={styles.pressable}
          onPress={() => onPressDeal(item)}
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
