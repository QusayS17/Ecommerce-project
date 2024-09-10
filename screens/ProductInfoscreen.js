import { StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles/homescreenstyle';
import { useNavigation, useRoute } from '@react-navigation/native';
import AddTocartbtn from '../components/AddTocartbtn';
import ProductsHeader from '../components/ProductsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';

const ProductInfoscreen = () => {
    const route = useRoute();
    const { width } = Dimensions.get('window');
    const navigation = useNavigation();
    const height = (width * 100) / 100;
    const { id, title, price, carouselImages, color, size, oldPrice, item } = route.params;

    const dispatch = useDispatch();
    const addItemToCart = (item) => {
        dispatch(addToCart(item))
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false)
        }, 6000)
    }
    const cart = useSelector((state) => state.cart.cart)
    console.log(cart)
    const [addedToCart, setAddedToCart] = useState(false)


















    if (!carouselImages || !Array.isArray(carouselImages)) {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>No images available.</Text>
            </SafeAreaView>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ProductsHeader />

                <View style={{ flex: 1 }}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }} // Add padding at the bottom
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                        >
                            {carouselImages.map((image, index) => (
                                <ImageBackground
                                    style={{ width, height, resizeMode: "contain" }}
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
                                            }}>
                                            <MaterialCommunityIcons name="share-variant" size={24} color="black" />
                                        </View>
                                    </View>
                                </ImageBackground>
                            ))}
                        </ScrollView>

                        <View style={styles.infoContainer}>
                            <Text style={{ color: "green" }}>In Stock</Text>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>${price}</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Color: <Text style={styles.infoValue}>{color}</Text></Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Size: <Text style={styles.infoValue}>{size}</Text></Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Price: <Text style={styles.infoValue}>{oldPrice}$</Text></Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Cash pay: <Text style={styles.infoValue}>, Delivery: 50$</Text></Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Total Price: <Text style={styles.infoValue}>{price}$</Text></Text>
                        </View>

                        <View style={styles.divider} />
                    </ScrollView>
                </View>

                {/* Add the button here */}
                <View style={styles.btnContainer}>
                    <AddTocartbtn onPress={() => addItemToCart({ item })} addedToCart={addedToCart} />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

export default ProductInfoscreen;
