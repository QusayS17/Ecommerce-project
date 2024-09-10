import { StyleSheet, View, TouchableOpacity, Text, Image, Pressable, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

const iconSize = 24;

const CartScreen = () => {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart.cart);
    console.log("Cart:", cart); // Debugging line

    const total = cart?.map((entry) => {
        const item = entry.item;
        const price = item?.price || 0;
        const quantity = entry?.quantity || 0;
        return price * quantity;
    }).reduce((curr, prev) => curr + prev, 0);

    // Default total to 0 if it's undefined or NaN
    const formattedTotal = total !== undefined && !isNaN(total) ? total.toFixed(2) : '0.00';

    console.log("Total:", formattedTotal); // Debugging line

    const renderItem = ({ item }) => {
        const { image, title, price } = item.item || {};
        const { quantity } = item || {};

        if (!image || !title || price === undefined || quantity === undefined) {
            return null; // Skip rendering this item if data is incomplete
        }

        return (
            <View style={styles.cartItem}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.productImage} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.productTitle}>{title}</Text>
                    <Text>Price: ${price}</Text>
                    <Text>Quantity: {quantity}</Text>
                    <Text>Total: ${price * quantity}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={[styles.iconContainer, styles.topLeft]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                        <View style={styles.iconCircle}>
                            <AntDesign name="close" size={iconSize} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>My Cart</Text>
            </View>
            <FlatList
                data={cart}
                renderItem={renderItem}
                keyExtractor={(item) => item.item.id ? item.item.id.toString() : Math.random().toString()}
                ListFooterComponent={() => (
                    <>
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalLabel}>Subtotal:</Text>
                            <Text style={styles.totalValue}>${formattedTotal}</Text>
                        </View>
                        <Pressable style={styles.proceedButton}>
                            <Text>Proceed To Buy</Text>
                        </Pressable>
                        <Text style={styles.separator} />
                        <View style={styles.imagesContainer}>
                            {cart.length > 0 ? (
                                cart.map((entry, index) => {
                                    const imageUri = entry.item?.image;
                                    return imageUri ? (
                                        <View key={index} style={styles.imageWrapper}>
                                            <Pressable>
                                                <Image
                                                    style={styles.cartImage}
                                                    source={{ uri: imageUri }}
                                                />
                                            </Pressable>
                                        </View>
                                    ) : null; // Skip if imageUri is undefined
                                })
                            ) : (
                                <Text>No items in cart</Text>
                            )}
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    container: {
        marginTop: 30,
        width: '100%',
        height: 60,
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        position: 'absolute',
        left: 10,
    },
    iconCircle: {
        borderRadius: 30,
        padding: 5,
        backgroundColor: '#ffffff',
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    cartItem: {
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        alignItems: 'center',
    },
    imageContainer: {
        marginRight: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    detailsContainer: {
        flex: 1,
    },
    productTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    totalContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    totalLabel: {
        fontWeight: 'bold',
    },
    totalValue: {
        fontSize: 18,
        color: 'green',
    },
    proceedButton: {
        backgroundColor: "#FFC72C",
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
    },
    separator: {
        height: 1,
        borderColor: "#D0D0D0",
        borderWidth: 1,
        margin: 16,
    },
    imagesContainer: {
        marginHorizontal: 10,
    },
    imageWrapper: {
        marginBottom: 10,
    },
    cartImage: {
        width: 140,
        height: 140,
        resizeMode: "contain",
    },
});
