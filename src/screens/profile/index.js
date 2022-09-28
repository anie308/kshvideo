import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ProfileNavBar from '../../components/profile/navBar'
import ProfileHeader from '../../components/profile/header'
import ProfilePostList from '../../components/profile/postList'

export default function Profile() {
  return (
    <View style={styles.container}>
      <ProfileNavBar/>
      <ProfileHeader/>
      <ProfilePostList/>
    </View>
  )
}