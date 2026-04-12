import { View, Text, StyleSheet } from "react-native";
import React from "react";

const settings = () => {
  return (
    <View style={style.container}>
      <Text>settings</Text>
    </View>
  );
};

export default settings;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  content: {
    fontSize: 22,
  },
});
