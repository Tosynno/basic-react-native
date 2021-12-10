import React, { useState } from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  let counter = 0;

  const [count, setCounter] = useState(0);

  const counterHandler = (counter) => {
    setCounter(counter);
  };

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // counter++;
          // counterHandler(counter);
          setCounter(count + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // counter--;
          // counterHandler(counter);
          setCounter(count - 1);
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
