import React, { useReducer } from "react";

import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  //state ==={red: number, green: number, blue: number}
  // action ==={colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0);

  //   const setColor = (color, change) => {
  //     //color === 'red, 'green', 'blue'
  //     //change === +15, -15
  //     switch (color) {
  //       case "red":
  //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //         break;
  //       case "green":
  //         if (green + change > 255 || green + change < 0) {
  //           return;
  //         } else {
  //           setGreen(green + change);
  //         }
  //         break;
  //       case "blue":
  //         if (blue + change > 255 || blue + change < 0) {
  //           return;
  //         } else {
  //           setBlue(blue + change);
  //         }
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
          <View>
          <ColorCounter
            onInCrease={() => runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })}
            onDeCrease={() => runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })}
            color="Red"
          />
          <ColorCounter
            onInCrease={() => runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })}
            onDeCrease={() => runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })}
            color="Blue"
          />
          <ColorCounter
            onInCrease={() => runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })}
            onDeCrease={() => runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })}
            color="Green"
          />
          <View
            style={{
              height: 150,
              width: 150,
              backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
            }} 
            />
        </View>

    //     <View>
    //       <ColorCounter
    //         onInCrease={() => setColor("red", COLOR_INCREMENT)}
    //         onDeCrease={() => setColor("red", -1 * COLOR_INCREMENT)}
    //         color="Red"
    //       />
    //       <ColorCounter
    //         onInCrease={() => setBlue(blue + COLOR_INCREMENT)}
    //         onDeCrease={() => setBlue(blue -1 * COLOR_INCREMENT)}
    //         color="Blue"
    //       />
    //       <ColorCounter
    //         onInCrease={() => setGreen(green + COLOR_INCREMENT)}
    //         onDeCrease={() => setGreen(green -1 * COLOR_INCREMENT)}
    //         color="Green"
    //       />
    //       <View
    //         style={{
    //           height: 150,
    //           width: 150,
    //           backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    //         }}
    //       />
    //     </View>
    
  )
}

const styles = StyleSheet.create({});

export default SquareScreen;
