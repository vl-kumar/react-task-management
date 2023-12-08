import styled from "styled-components";

export const Container = styled.div((props) => ({
  display: "flex",
  minHeight: "100vh",
  maxWidth: "80%",
  margin: "auto",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifySelf: "center",
  justifyContent: "center",
}));

export const Header = styled.h3((props) => ({
  color: props.theme.colors.textColor,
  fontSize: props.theme.fontSizes.header2,
  fontWeight: 400,
  margin: 0,
  opacity: 0.8,
}));

export const SubHeader = styled.h1((props) => ({
  color: props.theme.colors.textColor,
  fontSize: 100,
  fontWeight: 900,
  margin: 0,
  opacity: 0.8,
}));

export const SubTextView = styled.h3((props) => ({
  color: props.theme.colors.textColor,
  fontSize: props.theme.fontSizes.header4,
  textAlign: "center",
  fontWeight: 300,
  opacity: 0.6,
  margin: 0,
}));
