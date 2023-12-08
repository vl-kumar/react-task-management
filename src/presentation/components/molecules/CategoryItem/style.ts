import styled from "styled-components";

export const MainRow = styled.div((props) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%',
    maxWidth: '100%',
    borderBottom: `1px solid ${props.theme.colors.border}`,
    paddingTop: props.theme.spacings.sm,
    paddingBottom: props.theme.spacings.sm,
  }));