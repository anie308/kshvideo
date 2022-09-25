import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../../navigation/home";
import AuthScreen from '../../screens/auth'

const Stack = createNativeStackNavigator();

export default function Route() {
  const user = true
  if(!user){
    return (

      <View>
        <Text>No Routes</Text>
      </View>
       
      );
  }
  return (

 <View style={{height: '100%'}}>
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='home' component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='auth' component={AuthScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
 </View>
   
  );
}

