import { size } from "core/responsive";
import styled from "styled-components";

export const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  minHeight: "100%",
  margin: props.theme.spacings.lg,
}));

export const TaskGrid = styled.div`
  height: 100%;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 30.5% 30.5% 30.5%;
  @media screen and (max-width: ${size.tablet}) {
    grid-template-columns: 49.5% 49.5%;
  }
  @media screen and (max-width: ${size.mobileL}) {
    grid-template-columns: 100%;
  }

`;

export const NoContent = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  width: "100%",
  minHeight: "70vh",
  margin: props.theme.spacings.lg,
}));

export const TH = styled.th(()=> ({
  width: '20%',
  textTransform: 'capitalize',
  textAlign: 'left',
}))

export const TD = styled.td(()=> ({
  width: '20%',
  textAlign: 'left',
}))
