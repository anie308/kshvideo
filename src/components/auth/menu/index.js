import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import styles from './styles'
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function AuthMenu({authPage, setAuthPage, detailsPage, setDetailsPage}) {
    const showToast = () => {
        ToastAndroid.showWithGravity(
          "Coming Soon",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM
        );
      };
  return (
    <View  style={styles.container} >
        {authPage == 0 ? 
         <View style={styles.containerMain}>
     <Text style={styles.headerText}>Log In for KSH Earning</Text>
        <Text style={styles.normalText}>
          Manage your account, check notifications, earn ksh coins, and more
        </Text>
        <View style={styles.logButtonCon}>
          <TouchableOpacity
           style={styles.logOptionButton}
            onPress={() => setDetailsPage(!detailsPage)}
          >
            <Feather name="user" size={20} color="black" />
            <Text style={styles.logButtonText}>
              Use phone / email / username
            </Text>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logOptionButton}
           
          >
            <FontAwesome5 name="facebook" size={20} color="#4267B2" />
            <Text style={styles.logButtonText}>Continue with Facebook</Text>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logOptionButton}
            // onPress={() => setDetailsPage(!detailsPage)}
          >
            <FontAwesome5 name="facebook" size={20} color="#4267B2" />
            <Text style={styles.logButtonText}>Continue with Google</Text>
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logOptionButton}
            // onPress={() => setDetailsPage(!detailsPage)}
          >
            <FontAwesome5 name="facebook" size={20} color="#4267B2" />
            <Text style={styles.logButtonText}>Continue with Instagram</Text>
            <View></View>
          </TouchableOpacity>
            
        </View>
     </View> : <View style={styles.containerMain}>
       <Text style={styles.headerText}>Sign Up for KSH Earning</Text>
         <Text style={styles.normalText}>
           Create a Profile, watch and upload videos, earn from activities
         </Text>
         <TouchableOpacity style={styles.emailButton}>
           <Text style={styles.providerButtonText}>Use Phone or Email</Text>
         </TouchableOpacity>

         <View style={styles.altCon}>
           <View style={styles.altLine}></View>
           <Text style={styles.altText}>Or Continue with</Text>
           <View style={styles.altLine}></View>
         </View>
         <View style={styles.socialCon}>
           <TouchableOpacity style={styles.socialButton}>
             <Text>
               <FontAwesome5 name="facebook" size={28} color="#4267B2" />
             </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={showToast} style={styles.socialButton}>
             <Text>G</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.socialButton}>
             <Text>
               <FontAwesome name="twitter" size={28} color="#1DA1F2" />
             </Text>
           </TouchableOpacity>
         </View>
       </View>}
     
     
       
        <TouchableOpacity style={styles.containerBottomButton}
      // onPress={() => navigation.navigate('Home')}
      >
          <Text style={styles.buttonText}
           onPress={() => authPage == 0 ? setAuthPage(1) : setAuthPage(0)}>
            {authPage ==0 ? "Don't " : "Already"} have an Account?
            <Text style={styles.bottomButtonText}>  {authPage ==0 ? "Sign Up" : "Sign In"} </Text>
          </Text>
        </TouchableOpacity>
    </View>
  )
}