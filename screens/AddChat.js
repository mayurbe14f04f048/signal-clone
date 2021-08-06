import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");

  const createChat = async  () => {
      await db.collection('chats').add({
          chatName:input
      }).then(() =>{
          navigation.goBack();
      }).catch((error) => {
          alert(error)
      })

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add new Chat",
      headerBackTitle: "Chats",
    });
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter A chat Name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon = {
            <Icon name="wechat" type="antdesign" size={24} color="black"/>
        }
      />
      <Button onPress={createChat} title="Create New Chat"/>
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height:"100"
    }
});
