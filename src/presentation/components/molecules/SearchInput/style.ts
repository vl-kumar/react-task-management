import styled from "styled-components";

export const Container = styled.div((props) => ({
  display: "flex",
  width: "100%",
  marginBottom: props.theme.spacings.md,
}));

export const Input = styled.input((props) => ({
  width: "100%",
  padding: props.theme.spacings.xmd,
  borderRadius: props.theme.spacings.md,
  fontSize: props.theme.fontSizes.body2
}));
