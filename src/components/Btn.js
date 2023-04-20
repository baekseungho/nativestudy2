import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";

const ButtonCont = styled.TouchableOpacity`
  background-color: ${(props) =>
    props.title === "Login" ? props.theme.blue : props.theme.purple};
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.text};
`;

const Btn = (props) => {
  return (
    <ButtonCont title={props.title}>
      <Title>{props.title}</Title>
    </ButtonCont>
  );
};

export default Btn;
