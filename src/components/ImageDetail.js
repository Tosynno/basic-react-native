import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>Show image of forest {props.title}</Text>
      <Text> Image Score - {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
