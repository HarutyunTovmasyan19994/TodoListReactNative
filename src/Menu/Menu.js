import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

const Menu = ({navigation}) => {
  return(
    <TouchableOpacity onPress={()=>navigation.navigate("TodoList")}>
      <View>
      <Text>
        TodoList454
      </Text>
    </View>
    </TouchableOpacity>

  )
}
export default Menu
