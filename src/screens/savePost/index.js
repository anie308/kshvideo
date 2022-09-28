import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { StackActions, useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function SavePostScreen(props) {
  const  [description, setDescription] = useState('')
  const [requestRunning, setRequestRunning] = useState(false)
  const navigation  = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.inputText}
      multiline
      maxLength={150}
      onChangeText={(text) => setDescription(text)}
      placeholder='Describe your video'
      />
      </View>

      <Image
      style={styles.mediaPreview}
      source={{uri: props.route.params.source}}
      />
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.cancelButton}
        >
          <Feather name="x" size={24} color="black" />
          <Text style={styles.cancelButtonText}>Cancel</Text>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.popToTop()}
        style={styles.postButton}
        >
         <Ionicons name="md-cloud-upload-outline" size={24} color="white" />
          <Text style={styles.postButtonText}>Post</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}