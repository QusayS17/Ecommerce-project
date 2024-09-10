import { StyleSheet, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const ProductsHeader = () => {
    const { width } = Dimensions.get('window');
    const iconSize = 24;
    const circleSize = iconSize * 1.5; // Adjust this ratio if needed
    const [fav, setFav] = useState(false);
    const toggleFavorite = () => {
        setFav((prevState) => !prevState); // Toggle between true and false
    };
const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={[styles.iconContainer, styles.topLeft]}>
                    <View style={styles.iconCircle}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Main")}>
                        <AntDesign name="close" size={iconSize} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.iconContainer, styles.topRight]}>
                    <View style={styles.iconCircle}>
                        <TouchableOpacity onPress={toggleFavorite}>
                        <AntDesign
                                name={fav ? "heart" : "hearto"}
                                size={iconSize}
                                color={fav ? "red" : "black"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProductsHeader;

const styles = StyleSheet.create({
    safeArea: {
        flex: 0, // Ensure SafeAreaView does not take extra space
    },
    container: {
        width: '100%',
        height: 60, // Adjusted height
        position: 'relative',
        paddingHorizontal: 10,
        backgroundColor: 'white', // Background color for visibility (optional)
        justifyContent: 'center',
        paddingTop: 10, // Add padding to ensure icons are positioned below the status bar
    },
    iconContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topLeft: {
        top: 0, // Adjusted top position
        left: 10,
    },
    topRight: {
        top: 0, // Adjusted top position
        right: 10,
    },
    iconCircle: {
        width: 36, // Adjust the width and height for the circle
        height: 36,
        borderRadius: 18, // Half of width/height to make it circular
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2, // For Android shadow
    },
});
