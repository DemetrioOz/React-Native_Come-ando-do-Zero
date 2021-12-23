import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  let styleDefault =
    style?.fontWeight === "bold" ? styles.textNegrito : styles.text;

  return <Text style={[style, styleDefault]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "fontRegular",
    fontWeight: "normal",
  },
  textNegrito: {
    fontFamily: "fontBold",
    fontWeight: "normal",
  },
});
