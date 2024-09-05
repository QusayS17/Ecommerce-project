import React, { useState } from 'react';
import { Modal, View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../screens/styles/homescreenstyle'; 

const Dropdown = ({ data, selectedLocation, setSelectedLocation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const selectLocation = (location) => {
    setSelectedLocation(location);
    setModalVisible(false);
  };

  return (
    <>
      <Pressable style={styles.locationbar} onPress={() => setModalVisible(true)}>
        <EvilIcons name="location" size={24} color="black" />
        <Text style={styles.locationText}>Deliver to {selectedLocation}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.locationItem}
                  onPress={() => selectLocation(item.name)}
                >
                  <Text style={styles.locationText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Dropdown;
