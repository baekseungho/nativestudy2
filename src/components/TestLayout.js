import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled, { css } from "styled-components/native";

const NatvieCss = styled.Text`
  color: #eee;
  font-size: 50px;
`;
const NatvieCss1 = styled.Text`
  color: #eee;
  font-size: ${(props) => (props.title === "main" ? "15px" : "25px")};
`;

const StyleInput = styled.TextInput.attrs((props) => ({
  placeholder: "입력해라",
  placeholderTextColor: props.borderColor,
}))`
  border-color: ${(props) => props.borderColor};
`;

export const Header = (props) => {
  return (
    <View style={[styles.common, styles.header]}>
      <NatvieCss1>Header</NatvieCss1>
      <StyleInput borderColor="#fff" />
    </View>
  );
};

export const Contents = () => {
  return (
    <View style={[styles.common, styles.contents]}>
      <Text style={styles.text}>Content</Text>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.common, styles.footer]}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  common: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flex: 1,
    backgroundColor: "#86E57F",
  },
  contents: {
    flex: 2,
    backgroundColor: "#BA2B2B",
    height: 400,
  },
  footer: {
    flex: 1,
    backgroundColor: "#4374D9",
  },
  text: {
    fontSize: 30,
  },
});
