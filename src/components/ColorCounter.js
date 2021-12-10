import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({color, onInCrease, onDeCrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() =>{onInCrease()}} />
      <Button title={`Decrease ${color}`} onPress={() =>{onDeCrease()}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
