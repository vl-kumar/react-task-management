import styled from "styled-components";

export const Container = styled.div((props) => ({
  width: `calc(100% - ${props.theme.spacings.xl})`,
  margin: "auto",
  height: "100%",
  backgroundColor: props.theme.colors.tertiary,
  minHeight: `calc(100vh - ${props.theme.spacings.xl} - 60px)`,
  maxHeight: `calc(100vh - ${props.theme.spacings.xl} - 60px)`,
  marginTop: props.theme.spacings.xmd,
  marginBottom: props.theme.spacings.xmd,

  borderRadius: props.theme.spacings.sm,
  overflowY: 'auto',
  paddingBottom: props.theme.spacings.lg,
}));