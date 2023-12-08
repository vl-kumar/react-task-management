import styled from "styled-components";

export const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  minHeight: "100%",
  margin: props.theme.spacings.lg,
}));

export const MainRow = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  maxWidth: "100%",
  paddingBottom: props.theme.spacings.sm,
}));
