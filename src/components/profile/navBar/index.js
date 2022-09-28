import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';

export default function ProfileNavBar() {
  const user = true;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <AntDesign name="adduser" size={22}  />
      </TouchableOpacity>
      <Text style={styles.userName}>Peter Obi</Text>
      <View>
      <TouchableOpacity>
        <Feather name="menu" size={22} />
      </TouchableOpacity>
      </View>
    </View>
  );
}
