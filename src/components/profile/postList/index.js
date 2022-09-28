import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import ProfilePostListItem from './item'

const posts = [

]

export default function ProfilePostList() {
  return (
    <View>
      <FlatList
        numColumns={3}
        removeClippedSubviews
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (<ProfilePostListItem item={item}/>)}
      />
    </View>
  )
}