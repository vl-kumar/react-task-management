import {  size } from "core/responsive";
import styled from "styled-components";

export const Navigation = styled.h3((props) => ({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "relative",
  padding: "0.5rem 0rem",
  backgroundColor: props.theme.colors.primary,
  color: props.theme.colors.textColor,
  boxShadow: "0 2px 2px 2px rgba(9, 9, 9, 0.23)",
}));

export const BrandName = styled.a((props) => ({
  textDecoration: "none",
  color: props.theme.colors.textColor,
  fontSize: props.theme.fontSizes.header5,
  marginLeft: props.theme.spacings.xmd,
}));



export const Hamburger = styled.div`
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #232124c7;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;
  @media screen and (max-width: ${size.tablet}) {
      display: block;
  }
  &:hover  {
    background-color: #232124c7;
  }
`;

