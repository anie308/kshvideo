import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar } from "react-native-paper";
import { buttonStyles } from "../../../styles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ProfileHeader() {
    const user =true;
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={90} icon={"account"} />
        <TouchableOpacity ><Ionicons name="add-circle" size={26} style={styles.icon} /></TouchableOpacity>
        
        </View>
      <Text style={styles.emailText}>{user? '@peter_obi' : ''}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterItemContainer} >
          <Text style={styles.counterNumberText}>{user ? "24" : "0"}</Text>
          <Text style={styles.counterLabelText}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>{user ? "14.5k" : "0"}</Text>
          <Text style={styles.counterLabelText}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>{user ? "14.8M" : 0} </Text>
          <Text style={styles.counterLabelText}>Likes</Text>
        </TouchableOpacity>
      </View>
      {user ? (
       <View>
         <TouchableOpacity
         onPress={() => navigation.navigate('editProfile')}
         style={buttonStyles.grayOutlinedButton}>
          <Text style={buttonStyles.text}>Edit Profile</Text>
        </TouchableOpacity>
        <Text></Text>
       </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}
