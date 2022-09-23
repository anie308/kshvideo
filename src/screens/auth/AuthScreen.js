import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthMenu from "../../components/auth/menu";

export default function AuthScreen() {
   const [authPage, setAuthPage] = useState(0)
   const [detailsPage, setDetailsPage] = useState(false)
  return (
    <View style={{width: '100%', height: '100%'}}>
      <AuthMenu authPage={authPage} setAuthPage={setAuthPage} detailsPage={detailsPage} setDetailsPage={setDetailsPage}/>
    </View>
  );
}
