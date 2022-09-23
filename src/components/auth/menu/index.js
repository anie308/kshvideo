import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import {Feather} from '@expo/vector-icons'

export default function AuthMenu() {
  return (
    <View styles={styles.container } >
           <View style={styles.containerMain}>
           <Text style={styles.headerText}>Subscribe</Text>
            <TouchableOpacity style={styles.providerButton}>
                <Feather name='user' size={20} color='black' />
                <Text style={styles.providerButtonText}>User Email</Text>
                <View></View>
            </TouchableOpacity>
           </View>

           <TouchableOpacity style={styles.containerBottomButton}>
            <Text>Don't have an Account? Sign Up</Text>
           </TouchableOpacity>

    </View>
  )
}