import { View, Text } from "react-native";
import React, { useState } from "react";
import AuthMenu from "../../components/auth/menu";
import AuthDetails from "../../components/auth/details";

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(0);
  const [detailsPage, setDetailsPage] = useState(false);
  return (
    <View style={{ height: "100%", width: '100%'}}>
      {detailsPage ? (
        <AuthDetails
        detailsPage={detailsPage}
        setDetailsPage={setDetailsPage}
         />
      ) : (
        <AuthMenu
          authPage={authPage}
          setAuthPage={setAuthPage}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </View>
  );
}
