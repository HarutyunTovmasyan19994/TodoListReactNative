import React from 'react';
import {View,Text,TouchableOpacity,Button} from "react-native";
import { styles } from "../../style/style";

const Header =({navigations}) =>{
  return(
    <TouchableOpacity onPress={()=>navigations.negative("Menu")}>
      <View style={styles.header}>
        <View style={styles.display}>
            <Text style={styles.textTodo}>
              Todo list 15
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default Header
