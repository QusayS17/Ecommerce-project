// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white', 
    alignItems: "center"
  },
  text:{
fontWeight:"bold" , marginTop:12 , color:"#041E42" , textAlign:"center"
  },
BorderOfinputstyle:{
flexDirection:"row",
alignItems:"center",
gap: 5,
backgroundColor:"#D0D0D0",
paddingVertical: 5,
borderRadius: 5,
marginTop:30,
},
loginbtn:{
width:200, 
backgroundColor:"#FEBE10",
borderRadius:6,
marginLeft:"auto",
marginRight:"auto",
padding:15
},

});

export default styles;
