import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width } = Dimensions.get('window');
const buttonSize = (width - 40) / 3;

const AddressScreen = () => {
    const iconSize = 24;
    const navigation = useNavigation();
    const route = useRoute();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [floor, setFloor] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (route.params?.item) {
            const { name, details, floor, phone } = route.params.item;
            console.log(name , details )
            setName(name);
            setDetails(details);
            setFloor(floor);
            setPhone(phone);
           
        }
    }, [route.params?.item]);

    const handlePress = (index) => {
        setSelectedIndex(index); // Set the pressed button index
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={[styles.iconContainer, styles.topLeft]}>
                    <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                        <View style={styles.iconCircle}>
                            <AntDesign name="close" size={iconSize} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>New Address</Text>
            </View>
            <ScrollView>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.selectText}>Select Address Type</Text>
                </View>
                <View style={styles.Btncontainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            {
                                backgroundColor: selectedIndex === 0 ? '#B2EBF2' : '#D3D3D3',
                                borderColor: selectedIndex === 0 ? '#81D4FA' : '#B2EBF2',
                            }
                        ]}
                        onPress={() => handlePress(0)}
                    >
                        <Ionicons name="home-outline" size={iconSize} color="black" />
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            {
                                backgroundColor: selectedIndex === 1 ? '#B2EBF2' : '#D3D3D3',
                                borderColor: selectedIndex === 1 ? '#81D4FA' : '#B2EBF2',
                            }
                        ]}
                        onPress={() => handlePress(1)}
                    >
                        <FontAwesome name="building-o" size={iconSize} color="black" />
                        <Text>Work</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            {
                                backgroundColor: selectedIndex === 2 ? '#B2EBF2' : '#D3D3D3',
                                borderColor: selectedIndex === 2 ? '#81D4FA' : '#B2EBF2',
                            }
                        ]}
                        onPress={() => handlePress(2)}
                    >
                        <AntDesign name="questioncircleo" size={iconSize} color="black" />
                        <Text>Others</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.selectText}>Address Name</Text>
                </View>
                <View style={styles.borderOfInputStyle}>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={styles.textInput}
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.selectText}>Address Details</Text>
                </View>
                <View style={styles.borderOfInputStyle}>
                    <TextInput
                        value={details}
                        onChangeText={(text) => setDetails(text)}
                        style={styles.textInput}
                        placeholderTextColor="gray"
                    />
                </View>
                <View style={styles.inputRow}>
                    <View style={styles.inputContainer}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.label}>Floor Number</Text>
                        </View>
                        <TextInput
                            value={floor}
                            onChangeText={(text) => setFloor(text)}
                            style={styles.input}
                            placeholderTextColor="gray"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={styles.label}>Phone Number</Text>
                        </View>
                        <TextInput
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                            style={styles.input}
                            placeholderTextColor="gray"
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.container}>
                <TouchableOpacity style={styles.btndesign}>
                    <Text>Save Address</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

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
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    selectText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        left: 10,
    },
    Btncontainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    button: {
        width: buttonSize,
        height: buttonSize,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    borderOfInputStyle: {
        marginTop: 30,
        alignItems: 'center',
    },
    textInput: {
        width: width * 0.9,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#F2F1FD',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D3D3D3',
    },
    btndesign: {
        backgroundColor: "#E0F7F8",
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    btnContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 18,
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        fontSize: 18,
        backgroundColor: '#F2F1FD',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D3D3D3',
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 3,
    },
});

export default AddressScreen;
