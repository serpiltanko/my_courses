import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";


const LoadingSpinner = () => {
  return (
    <View style={styles.container }>
      <ActivityIndicator size="large" color="red"/>
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"white",
  
  },
});
