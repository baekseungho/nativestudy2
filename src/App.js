import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { style1, style2 } from "./styles/TestStyle";
import { Contents, Footer, Header } from "./components/TestLayout";
import styled, { css, ThemeProvider } from "styled-components/native";
import { theme, lightTheme, darkTheme } from "./theme";
import Btn from "./components/Btn";
import { useState } from "react";
import { Switch } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _togleSwitch = () => setIsDark(!isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_togleSwitch} />
        <Btn title="Login" />
        <Btn title="Sign Up" />
      </Container>
    </ThemeProvider>
    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Header title="main" />
    //   <Contents />
    //   <Footer />

    /* <Text style={styles.text1}>첫번째 스타일</Text>
      <Text style={styles.text2}>두번째 스타일</Text>
      <Text style={[styles.text3, styles.text2]}>세번째 스타일</Text>
      <Text style={[styles.text3, { color: "pink" }]}>네번째 스타일</Text>
      <View style={style1.box}>
        <Text style={style2.text}>외부 스타일</Text>
      </View> */

    // </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "red",
  },
  text2: {
    fontSize: 30,
    color: "blue",
  },
  text3: {
    fontWeight: 800,
    padding: 20,
  },
});

export default App;
