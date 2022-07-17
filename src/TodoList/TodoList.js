import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const TodoList = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Menu")}>
    <Text>
      Menu
    </Text>
    </TouchableOpacity>
  );
};

export default TodoList;