import styled from "styled-components";

export const TextView = styled.h2((props) => ({
  color: props.theme.colors.textColor,
  fontSize: props.theme.fontSizes.header3,
  margin: 0,
  fontWeight: 300,
  opacity: 0.8,
}));
