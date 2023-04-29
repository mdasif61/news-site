import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Latest News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/category/0'><p>Home</p></Link>
          </Nav>
          <Nav>
            {
              user && <p className="text-white">Profile</p>
            }
            {user?
             <Button onClick={handleLogOut}>Log Out</Button>
            :<Link to='/login'><Button>Login</Button></Link>} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
