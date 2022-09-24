import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from "@expo/vector-icons";
import styles  from './styles'
import { TextInput } from 'react-native-paper';


export default function AuthDetails({authPage,  detailsPage, setDetailsPage}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name='arrow-left' size={20} color='black' />
      </TouchableOpacity>
     <View style={styles.formContainer}>
     <TextInput
      onChangeText={(text) => setEmail(text)}
      placeholder="Email"
      ></TextInput>
     <TextInput
     
      onChangeText={(text) => setPassword(text)}
      placeholder="Password"
      ></TextInput>
      <TouchableOpacity style={styles.submitButton}><Text style={styles.submitButtonText}>Login</Text></TouchableOpacity>
     </View>
    </View>
  )
}