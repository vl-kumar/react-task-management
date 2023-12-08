import styled from "styled-components";

export const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "flex-start",
  border: `1px solid ${props.theme.colors.border}`,
  backgroundColor: props.theme.colors.textColor,
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  borderRadius: props.theme.spacings.sm,
  padding: props.theme.spacings.xmd,
  marginBottom: props.theme.spacings.lg,
}));

export const IconSection = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-end",
}));

export const CardRow = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "100%",
}));

export const Content = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: props.theme.spacings.md,
}));

export const BoldText = styled.span((props) => ({
  fontSize: props.theme.fontSizes.body2,
  fontWeight: 600,
}));
