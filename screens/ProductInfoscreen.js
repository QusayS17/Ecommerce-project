import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import styles from './styles/homescreenstyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import addtocartbtn from '../components/addtocartbtn';
const ProductInfoscreen = () => {
    const route = useRoute();
    const { width } = Dimensions.get('window');
    const navigation = useNavigation();
    const height = (width * 100) / 100;

    // Destructure carouselImages instead of carouselImage
    const { id, title, price, carouselImages, color, size, oldPrice, item } = route.params;

    // Optional: Handle cases where carouselImages might still be undefined
    if (!carouselImages || !Array.isArray(carouselImages)) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No images available.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={{ marginTop: 45, flex: 1, backgroundColor: "white" }} showsVerticalScrollIndicator={false}>
            <ScrollView>

            <View style={{ backgroundColor: '#00CED1', padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={styles.searchbar}>
                    <EvilIcons style={{ paddingLeft: 10 }} name="search" size={24} color="black" />
                    <TextInput placeholder='Search Items..' />
                </Pressable>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled // This allows snapping to each image
            >
                {carouselImages.map((image, index) => (
                    <ImageBackground
                        style={{ width, height, resizeMode: "contain" }} // Set the width and height for each image
                        source={{ uri: image }}
                        key={index}
                    >
                        <View
                            style={{
                                padding: 20,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    backgroundColor: "#C60C30",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}>
                                <Text style={{ color: "white", fontWeight: "600", textAlign: "center", fontSize: 12 }}>20% off</Text>
                            </View>

                            <View
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "row"
                                }}>
                                <MaterialCommunityIcons name="share-variant" size={24} color="black" />
                            </View>
                        </View>
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                marginTop: "auto",
                                marginLeft: 10,
                                marginBottom: 20,
                            }}>
                            <AntDesign name="hearto" size={24} color="black" />
                        </View>
                    </ImageBackground>
                ))}
            </ScrollView>

            <View
                style={{
                    padding: 10,
                }}
            >
                <Text style={{ color: "green" }}>In Stock</Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: "500",
                    }}>
                    {title}
                </Text>

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        marginTop: 6,
                    }}>
                    ${price}
                </Text>
            </View>
            <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }}></Text>

            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                <Text style={{ fontWeight: "800", marginTop: 4, }}>Color: <Text style={{ fontWeight: "500" }} >{color}</Text></Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                <Text style={{ fontWeight: "800", marginTop: 4, }}>Size: <Text style={{ fontWeight: "500" }} >{size}</Text></Text>
            </View>
            <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }}></Text>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "800", marginTop: 4, textDecorationLine: "line-through" }}>Price: <Text style={{ fontWeight: "500" }} >{oldPrice}$</Text></Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "800", marginTop: 4 }}>Cash pay: <Text style={{ fontWeight: "500" }} >, Delivery: 50$</Text></Text>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "800", marginTop: 4, }}>Total Price: <Text style={{ fontWeight: "500" }} >{price}$</Text></Text>
            </View>
            <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1 }}></Text>

            
            </ScrollView>
            <addtocartbtn/>
        </ScrollView>
        
    );
};

export default ProductInfoscreen;
