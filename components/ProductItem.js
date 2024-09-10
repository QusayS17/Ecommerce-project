import { StyleSheet, Text, View, Pressable, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AddTocartbtn from './AddTocartbtn';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartReducer';

const ProductItem = ({item}) => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [addedToCart, setAddedToCart] = useState(false)
  const dispatch = useDispatch();
  const addItemToCart= (item)=>{
setAddedToCart(true); 
dispatch(addToCart(item));
setTimeout(() => {
  setAddedToCart(false)
}, 6000)
  }
  return (
    <Pressable style={styles.container}  >
      
      {loading && <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />}
      <Image
        style={styles.image}
        source={{ uri: item.image }}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)} // Hide loader if image fails to load
      />

      <Text numberOfLines={1} style={{width:150 , marginTop:10  , fontWeight:"bold"}}>{item.title}</Text>
      <View style={{backgroundColor:"#DDDDDD" , marginTop:5 , justifyContent:"space-between" , flexDirection:"row" , alignItems:"center" }}>
      <Text style={{}}>{item.price }<Text style={{color:"green" , fontWeight:"bold"}}>$</Text></Text>

      <Text style={{fontWeight:"800"}}>{item.rating.rate} <FontAwesome name="star" size={15} color="gold" /></Text>
      </View>
      <AddTocartbtn onPress={() => addItemToCart({ item })} addedToCart={addedToCart} />
    </Pressable>
  );

}

export default ProductItem

 
const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '45%', // Set width to 45% so two items fit within the row with some spacing
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode:"contain",
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
});
