import React, { useState, useEffect } from 'react';
import { Modal, View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../screens/styles/homescreenstyle';

const Dropdown = ({ data,
   selectedValue,
    setSelectedValue, 
    displayKey, 
    valueKey,
     initialSelect , 
     dropdownstyle,
    icon}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState(initialSelect);

  // Include initial select option in the data array
  const extendedData = [{ [displayKey]: initialSelect, [valueKey]: null }, ...data];

  useEffect(() => {
    if (selectedValue && selectedValue[displayKey]) {
      setPlaceholder(selectedValue[displayKey]);
    } else {
      setPlaceholder(initialSelect);
    }
  }, [selectedValue]);

  const selectItem = (item) => {
    if (item[valueKey] === null) {
      // Handle reset
      setSelectedValue(null);
      setPlaceholder(initialSelect);
    } else {
      setSelectedValue(item);
      setPlaceholder(item[displayKey]);
    }
    setModalVisible(false);
  };

  return (
    <>
      <Pressable style={[styles.locationbar , dropdownstyle]} onPress={() => setModalVisible(true)}>
        {/* <EvilIcons name="location" size={24} color="black" /> */}
        <Text style={styles.locationText}>{placeholder}</Text>
        {icon && <MaterialIcons name={icon} size={24} color="black" style={styles.icon} />}
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
              data={extendedData}
              keyExtractor={(item) => item[valueKey]?.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.locationItem}
                  onPress={() => selectItem(item)}
                >
                  <Text style={styles.locationText}>{item[displayKey]}</Text>
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
