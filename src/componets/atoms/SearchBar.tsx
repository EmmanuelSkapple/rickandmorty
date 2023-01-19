import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { SearchBarProps } from "../../../types/AtomsTypes";


const SearchBar = ({ value, callBackChange } : SearchBarProps) => {
  return (
    <View style={styles.inputContainer} >
      <TextInput
        style={styles.input}
        placeholder='Search...'
        value={value}
        onChangeText={callBackChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
inputContainer: {
    width:'100%',
 },
 input:{
    width:'100%',
    padding:8,
    borderWidth:1,
    borderColor:'#c1c1c1',
    borderRadius:8,
    color:'#3b3b3b',
    fontWeight:'600'
 }
});

export default SearchBar;
