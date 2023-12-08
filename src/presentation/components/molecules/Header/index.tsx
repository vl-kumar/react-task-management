
const Header = () => {
  const headerStyle = {
    paddingBottom: "20px",
    lineHeight: "2em",
  };
  return (
    <header style={headerStyle}>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  );
};

export default Header;
