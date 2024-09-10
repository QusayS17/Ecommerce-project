import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals';
import { useNavigation } from '@react-navigation/native';
const BottomModelComponent = ({ visible, onClose, locations, onLocationSelect , v}) => {
    const navigation = useNavigation();
    
  return (
    <BottomModal
      visible={visible}
      onTouchOutside={onClose}
      modalAnimation={new SlideAnimation({
        slideFrom: 'bottom',
      })}
    >
      <ModalContent>
        <SafeAreaView>
          <ScrollView style={{ paddingBottom: 80 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 1, padding: 2, width: 65, marginBottom: 9, backgroundColor: "#D0D0D0" }}></Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Select Location</Text>
            </View>
            <View style={{ justifyContent: "space-between", flexDirection: "row", paddingBottom: 8 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "#D0D0D0" }}>Saved Addresses</Text>
              <TouchableOpacity onPress={()=>{navigation.navigate("My Address");onClose() }}>
                <Text style={{ fontSize: 15, fontWeight: "bold", color: "#AFEEEE" }}>Edit Addresses</Text>
              </TouchableOpacity>
            </View>
            {locations.map((location) => (
              <Pressable
                key={location.id}
                onPress={() => onLocationSelect(location.name, location.details)}
                style={{ padding: 15 }}
              >
                <View>
                  <Text style={{ fontSize: 16, color: "#AFEEEE", fontWeight: "600" }}>{location.name}</Text>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>{location.details}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
          <View style={{ marginTop: 5, alignItems: "center", position: "absolute", bottom: 0, left: 0, right: 0, paddingTop: 6 }}>
            <TouchableOpacity style={{
                 borderWidth: 4, 
                 borderColor: "#AFEEEE", 
                 width: "100%",
                  alignItems: "center",
                   height: 60, 
                   justifyContent: "center",
                    borderRadius: 12 
                    }}
                    onPress={()=>{navigation.navigate("New Address");onClose() }}
                    >
              <Text style={{ padding: 3, fontWeight: "800", color: "#000000" }}>Add New Address</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ModalContent>
    </BottomModal>
  );
};

export default BottomModelComponent;
