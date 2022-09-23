import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/Auth/AuthScreen'
import MainScreen from '../screens/MainScreen'

const Stack = createNativeStackNavigator()

export default function Route() {
    const user = false
 
    return (
        <View>
            <Text>Text</Text>
        </View>
        // <NavigationContainer>
        //  <Stack.Navigator>
        //     {user ? <Stack.Screen name='main' component={MainScreen} options={{headerShown: false}}/>  : <Stack.Screen name='auth' component={AuthScreen} options={{headerShown: false}}/>
        //     }
        //  </Stack.Navigator>
        // </NavigationContainer>
       
      )
  
}

const styles = StyleSheet.create({})