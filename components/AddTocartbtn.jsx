import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const AddTocartbtn = ({ onPress, addedToCart }) => {
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity 
                style={[styles.btndesign, addedToCart && styles.btnAdded]} 
                onPress={onPress}
                disabled={addedToCart} // Disable button when item is already added to cart
            >
                <Text>{addedToCart ? "Added to Cart" : "Add to Cart"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddTocartbtn;

const styles = StyleSheet.create({
    btndesign: {
        backgroundColor: "#FFC72C",
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    btnAdded: {
        backgroundColor: "#DDDDDD", // Change color when item is added to cart
    },
    btnContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});
