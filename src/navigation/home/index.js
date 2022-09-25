import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Feed from '../../components/feed'
import Profile from '../../components/profile'
import Friends from '../../components/friends'
import Create from '../../components/create'
import Inbox from '../../components/inbox'
import {Feather} from '@expo/vector-icons'
import CameraScreen from '../../screens/camera'
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
    const Bottom = createMaterialBottomTabNavigator()
  return (

      <Bottom.Navigator
   barStyle={{backgroundColor: 'black'}}
   initialRouteName='feed'
   activeColor='#F6BE00'
   >
    <Bottom.Screen
     name='feed'
     component={Feed}
     options={{
        tabBarIcon: ({color}) => (
            <Feather name='home' size={24} color={color}/> 
        )
     }}
     />
    <Bottom.Screen
     name='friends'
     component={Friends}
     options={{
        tabBarIcon: ({color}) => (
            <FontAwesome name="users" size={24} color={color} /> 
        )
     }}
     />
    <Bottom.Screen
     name='create'
     component={CameraScreen}
     options={{
        tabBarIcon: ({color}) => (
            <Feather name='plus-square' size={24} color={color}/> 
        )
     }}
     />
    <Bottom.Screen
     name='inbox'
     component={Inbox}
       options={{
        tabBarIcon: ({color}) => (
            <Feather name='message-square' size={24} color={color}/> 
        )
     }}
     />
    <Bottom.Screen
     name='profile'
     component={Profile}
     options={{
        tabBarIcon: ({color}) => (
            <Feather name='user' size={24} color={color}/> 
        )
     }}
     />
   </Bottom.Navigator>

  )
}