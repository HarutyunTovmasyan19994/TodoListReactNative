import React from "react";
import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import{createNativeStackNavigator} from "@react-navigation/native-stack";
import Menu from "../Menu/Menu";
import TodoList from "../TodoList/TodoList";

const Routs = () => {
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='TodoList'
            component={TodoList}
            options={
              {
                title:"TodoList",
                headerTitle:"TodoList",
                headerStyle:{
                  width:"100%",
                  height:50,
                  backgroundColor:'#808080',
                  textAlign:"center"
                },
              }
            }
          />
          <Stack.Screen
            name='Menu'
            component={Menu}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Routs;
