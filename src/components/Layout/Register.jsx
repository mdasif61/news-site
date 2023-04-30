import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accept,setAccept]=useState(false)
  const navigate = useNavigate();

  const handleSumbit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccept=event=>{
    setAccept(event.target.checked)
  }

  return (
    <Form onSubmit={handleSumbit} className="w-50 mx-auto my-5">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Enter Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={<>I accept <Link to='/terms'>the terms and conditions</Link></>}
          onClick={handleAccept}
        />
      </Form.Group>
      <Button disabled={!accept} variant="primary" type="submit">
        Register
      </Button>
      <br></br>
      <Form.Text className="text-muted">
        Already Have An Account? <Link to="/login">Login</Link>
      </Form.Text>
    </Form>
  );
};

export default Register;
