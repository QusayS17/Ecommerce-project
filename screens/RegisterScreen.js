import { StyleSheet, Text, Image, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable , TouchableWithoutFeedback , Keyboard} from 'react-native'
import React, { useState } from 'react'
import styles from './styles/Loginstyle'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [username , Setusername] = useState("");
  const [Password , setPassword] = useState("");
  const [ConfirmPassword , setConfirmPassword] = useState("");
  const [email , setEmail] = useState("");

const handleSignUp =()=>{

  if(Password!= ConfirmPassword){
    alert("Password Doesnot Match please Try Again!")
    setConfirmPassword("");
    setPassword("");
    return;
  }
  navigation.navigate("LoginScreen");
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.safeAreaView}>

    <View>
      <Image
        style={{ width: 150, height: 100 }}
        source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png", }}
      />
    </View>

    <KeyboardAvoidingView>

      <View >
        <Text style={styles.text}>Welcome To Our App! </Text>
        <Text style={styles.text}>Please fill Required Information</Text>
      </View>

      <View style={{ marginTop: 70 }}>
        <View style={styles.BorderOfinputstyle}>

          <MaterialCommunityIcons name="email" size={24} style={{ marginLeft: 8, color: "gray", }} />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail((text))}
            placeholder='Enter Your Email'
            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 12 : 16 }} ></TextInput>
        </View>

      </View>
      <View style={{ marginTop: 10 }}>

        <View style={styles.BorderOfinputstyle}>

          <MaterialCommunityIcons name="account" size={24} style={{ marginLeft: 8, color: "gray" }} />
          <TextInput
            value={username}
            onChangeText={(text) => Setusername((text))}
            secureTextEntry={true}
            placeholder='Enter Your Full name'
            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: Password ? 18 : 16 }}  ></TextInput>

        </View>
      </View>

      <View style={{ marginTop: 10 }}>

        <View style={styles.BorderOfinputstyle}>

          <MaterialCommunityIcons name="lock" size={24} style={{ marginLeft: 8, color: "gray" }} />
          <TextInput
            value={Password}
            onChangeText={(text) => setPassword((text))}
            secureTextEntry={true}
            placeholder='Enter Your Password'
            style={{ color: "gray", marginVertical: 10, width: 300, fontSize: Password ? 18 : 16 }}  ></TextInput>

        </View>
      </View>
      <View style={{ marginTop: 10 }}>

<View style={styles.BorderOfinputstyle}>

  <MaterialCommunityIcons name="lock" size={24} style={{ marginLeft: 8, color: "gray" }} />
  <TextInput
    value={ConfirmPassword}
    onChangeText={(text) => setConfirmPassword((text))}
    secureTextEntry={true}
    placeholder='Confirm Your Password'
    style={{ color: "gray", marginVertical: 10, width: 300, fontSize: Password ? 18 : 16 }}  ></TextInput>

</View>
</View>
      <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
  
        <Text style={{ color: "#007FFF", fontWeight: "500" }}> Already have an account?</Text>
      </View>


      <View style={{ marginTop: 50 }}>
        <Pressable style={styles.loginbtn} onPress={handleSignUp}>
          <Text style={{ textAlign: "center", fontSize: 16, color: "white", fontWeight: "bold" }}>Sign Up</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>

  </SafeAreaView>
  </TouchableWithoutFeedback>
  )
}

export default RegisterScreen

