import React, { useReducer } from "react";

import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state ==={red: number, green: number, blue: number}
  // action ==={colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };

    case "green":
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      green;
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onInCrease={() =>
          runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDeCrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onInCrease={() =>
          runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDeCrease={() =>
          runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onInCrease={() =>
          runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDeCrease={() =>
          runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
