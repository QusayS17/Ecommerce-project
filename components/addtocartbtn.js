import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const addtocartbtn = () => {
  return (
    <View>

    <TouchableOpacity style={styles.btndesign}>
        <Text>Add to Cart</Text>
    </TouchableOpacity>
        </View>
  )
}

export default addtocartbtn

const styles = StyleSheet.create({

    btndesign:{backgroundColor: "#FFC72C",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:10,
    marginVertical:10
    },
})