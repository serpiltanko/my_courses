import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";


const Input = ({ label, textInputConfig, style, invalid }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({

  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },

  label: {
    fontSize: 15,
    color: "blue",
    marginBottom: 4,
  },

  input: {
    backgroundColor: "pink",
    padding: 6,
    borderRadius: 10,
    fontSize: 15,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: "red",
  },
  invalidInput: {
    backgroundColor: "lightcoral",
  },
});
