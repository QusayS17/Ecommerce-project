import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const LocationHeader = ({ selectedLocation, openModal }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={openModal} style={styles.pressable}>
        <EvilIcons name="location" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            Delivering To: {selectedLocation?.name || "Select Location"}
          </Text>
          <Text style={styles.detailsText}>
            {selectedLocation?.details || "Location Details"}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "#E0F7F8", marginBottom: 5 },
  pressable: { flexDirection: "row", alignItems: "center" },
  textContainer: { marginLeft: 8 },
  mainText: { fontSize: 14, color: "gray", fontWeight: "bold" },
  detailsText: { fontSize: 14, color: "#000000", fontWeight: "bold", marginTop: 4 },
});

export default LocationHeader;
