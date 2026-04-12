import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";

const index = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={style.container}>
      <Text style={style.content}>Edit app/index</Text>
      <Text>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

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
