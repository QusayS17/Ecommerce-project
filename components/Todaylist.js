import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const Todaylist = ({ offers }) => {
    const navigation = useNavigation();
      
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {offers.map((item, inde) => (
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
                    style={{
                        marginVertical: 10,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                    <Image style={{ width: 150, height: 150, resizeMode: "contain" }} source={{ uri: item.image }} />
                    <View style={{ backgroundColor: "#00CED1", paddingVertical: 5, width: 130, justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 4 }}>
                        <Text style={{ padding: 10, fontSize: 12, fontWeight: 18, color: "#666666" }}>Up To {item?.offer} </Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    )
}

export default Todaylist

const styles = StyleSheet.create({})
