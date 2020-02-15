import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// import { Container } from './styles';

export default function Welcome({ navigation }) {
  function handleOnPress() {
    navigation.navigate("Login");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Já tenho uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}