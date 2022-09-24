import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

export default function AuthMenu({
  authPage,
  setAuthPage,
  detailsPage,
  setDetailsPage,
}) {
  const showToast = () => {
    ToastAndroid.showWithGravity('Coming Soon', 
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM
    )
  }
  return (
    // {authPage == 0? 'Sign In' : 'Sign Up'}
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.headerText}>Sign Up for Ksh Video</Text>
        <Text style={styles.normalText}>
          Create a Profile, Follow other acounts, make your own video and more
        </Text>
        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => setDetailsPage(!detailsPage)}
        >
          <Text style={styles.providerButtonText}>Use Phone or Email</Text>
        </TouchableOpacity>

        <Text style={styles.altText}>Or continue with</Text>
        <View style={styles.socialCon}>
          <TouchableOpacity style={styles.socialButton}><Text>Fb</Text></TouchableOpacity>
          <TouchableOpacity
             onPress={showToast} style={styles.socialButton}><Text>G</Text></TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}><Text>Twit</Text></TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.containerBottomButton}
        onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
      >
        {authPage == 0 ? (
          <Text>
            Don't have an Account?{" "}
            <Text style={styles.bottomButtonText}>Sign Up</Text>
          </Text>
        ) : (
          <Text>
            Already have an Account?{" "}
            <Text style={styles.bottomButtonText}>Sign In</Text>
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
