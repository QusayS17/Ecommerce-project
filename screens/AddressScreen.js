import { StyleSheet, View, Dimensions, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AddressScreen = () => {
    const { width } = Dimensions.get('window');
    const iconSize = 24;
    const circleSize = iconSize * 1.5; // Adjust this ratio if needed
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <Ionicons name="chevron-back" size={iconSize} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>New Address</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, // Ensure SafeAreaView takes the full height
        backgroundColor: '#f8f8f8', // Set the background color to match the header
    },
    container: {
        width: '100%',
        height: 60, // Adjusted height
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8', // Set the background color to match the header
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
    },
    iconContainer: {
        position: 'absolute',
        left: 10,
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
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1, // Ensure title takes the remaining space
    },
});

export default AddressScreen;
