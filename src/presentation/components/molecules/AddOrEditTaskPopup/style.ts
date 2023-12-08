import styled from "styled-components";

export const TaskForm = styled.form((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const TaskInput = styled.input((props) => ({
  display: "flex",
  width: "95%",
  fontSize: "14px",
  padding: "12px 15px",
  border: "1px solid #cecece",
  outline: "none",
  fontWeight: 400,
  maxWidth: "95%",
}));

export const SelectDropdown = styled.select((props) => ({
  display: "flex",
  fontSize: "14px",
  padding: "12px 15px",
  border: "1px solid #cecece",
  outline: "none",
  fontWeight: 400,
  maxWidth: "95%",
  width: "95%",
}));

export const Title = styled.h3((props) => ({
  fontWeight: 400,
}));
export const TitleRow = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "95%",
  marginBottom: props.theme.spacings.md,
}));

export const Button = styled.button((props) => ({
  width: "60%",
  fontSize: props.theme.fontSizes.body2,
  padding: "12px 15px",
  alignItems: "center",
  backgroundColor: "#1644e2",
  marginTop: "1rem",
  backgroundImage: "linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)",
  boxShadow: "rgba(0, 0, 0, 0.25) 0 3px 8px",
  color: props.theme.colors.textColor,
  borderRadius: props.theme.spacings.xs,
  fontWeight: 600,
}));

export const HeaderText = styled.h3((props) => ({
  marginRight: props.theme.spacings.xmd,
}));

export const Row = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "95%",
  marginBottom: props.theme.spacings.md,
}));