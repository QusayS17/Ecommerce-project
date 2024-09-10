import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const iconSize = 24;
const { width } = Dimensions.get('window');

const MyAddress = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const locations = route.params?.locations || [];  // Safely access locations or default to an empty array

  const handleEdit = (item) => {
    navigation.navigate('New Address', { item });
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete', id);
    // You might want to update the state and/or make an API call to delete the address
  };

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, styles.topLeft]}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <View style={styles.iconCircle}>
              <AntDesign name="close" size={iconSize} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>My Addresses</Text>
      </View>

      {locations.length > 0 ? (
        <FlatList
          data={locations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.addressContainer}>
              <View style={styles.addressDetails}>
                <Text style={styles.addressName}>{item.name}</Text>
                <Text style={styles.addressDetailsText}>{item.details}</Text>
              </View>
              <View style={styles.actionsContainer}>
                <TouchableOpacity onPress={() => {handleEdit(item) , handleEdit()}} style={styles.actionButton}>
                  <Text style={styles.actionText}>Edit </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionButton}>
                  <Text style={styles.actionText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noAddresses}>No saved addresses available.</Text>
      )}
    </View>
  );
};

export default MyAddress;

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
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  addressDetails: {
    flex: 1,
    left:10,
  },
  addressName: {
    fontSize: 16,
    fontWeight: '600',
  },
  addressDetailsText: {
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    right:20
  },
  actionButton: {
    marginLeft: 10,
    padding: 5,
  },
  actionText: {
    fontSize: 14,
    color: 'tomato',
  },
  noAddresses: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
});
