import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function AuthDetails({ authPage, detailsPage, setDetailsPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={() => setDetailsPage(!detailsPage)}
      >
        <Feather name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.formContainer}>
        <View 
        style={styles.input}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>{authPage ==0 ? 'Sign In' : 'Sign Up' }</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
