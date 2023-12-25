import { size } from "core/responsive";
import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  padding: 1.5rem;
  @media screen and (max-width: ${size.mobileL}) {
    display: none;
  }
`;

export const NoContent = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "70vh",
  margin: props.theme.spacings.lg,
}));
