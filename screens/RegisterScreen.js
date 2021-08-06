import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "react-native";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Input,Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const register = () => {
      auth.createUserWithEmailAndPassword(email,password).then((authUser) => {
          authUser.user.updateProfile({
              displayName: name ,
              photoURL : imgUrl || "https://www.urbansplash.co.uk/images/placeholder-16-9.jpg"
          })

      }).catch((error) => alert(error.message) );

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle:"Back To Login"
    })
    
  }, [navigation])
  

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create Signal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
         <Input
          placeholder="Email"
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
         <Input
          placeholder="password"
          secureTextEntry type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
         <Input
          placeholder="Profile picture Url (optional)"
          
          type="text"
          value={imgUrl}
          onChangeText={(text) => setImgUrl(text)}
          onSubmitEditing = {register}
        />
      </View>
      <Button 
      containerStyle={styles.button}
      raised title="Register" onPress={register}/>
      <View style={{height:100}}/>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    button:{
    width:200,
    marginTop:10
    },
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      padding: 10,
      backgroundColor: "white"
    },
    inputContainer: {
        width:300,

    }
});
