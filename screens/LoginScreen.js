import { StyleSheet, Text, Image, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './styles/Loginstyle'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>

      <View>
        <Image
          style={{ width: 150, height: 100 }}
          source={{ uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png", }}
        />
      </View>

      <KeyboardAvoidingView>

        <View >
          <Text style={styles.text}>Login To Your Account</Text>
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

            <MaterialCommunityIcons name="lock" size={24} style={{ marginLeft: 8, color: "gray" }} />
            <TextInput
              value={Password}
              onChangeText={(text) => setPassword((text))}
              secureTextEntry={true}
              placeholder='Enter Your Password'
              style={{ color: "gray", marginVertical: 10, width: 300, fontSize: Password ? 18 : 16 }}  ></TextInput>

          </View>
        </View>
        <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text>Keep me logged In!</Text>

          <Text style={{ color: "#007FFF", fontWeight: "500" }}> Forget Password?</Text>
        </View>


        <View style={{ marginTop: 50 }}>
          <Pressable style={styles.loginbtn}>
            <Text style={{ textAlign: "center", fontSize: 16, color: "white", fontWeight: "bold" }}>Login</Text>
          </Pressable>
        </View>

        <Pressable onPress={()=> navigation.navigate("RegisterScreen")} style={{ marginTop: 12, alignItems: "center" }}>
          <Text style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}>Don't have an account? Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default LoginScreen

