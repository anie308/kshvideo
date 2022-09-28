import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function NavBarGeneral() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
        <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
    </View>
  )
}