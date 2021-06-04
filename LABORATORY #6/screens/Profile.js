import React from "react";
import { ActivityIndicator, ScrollView, Text, StyleSheet } from "react-native";

const Profile = ({ route }) => {

  const data = route.params;

  return(
    <ScrollView style={styles.container}>
      <Text> { JSON.stringify(data, null, 2) } </Text>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#aec599'
  }
}
);