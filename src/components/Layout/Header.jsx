import React from "react";
import logo from "../../assets/logo.png";
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <div>
    <Container className="text-center">
      <img src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
    </Container>
    </div>
  );
};

export default Header;
