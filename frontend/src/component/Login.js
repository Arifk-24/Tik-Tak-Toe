import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    const user = {
      email: email,
      password: password
    };
    axios.post('/create_profile',user).then(res=>{
      console.log("Data submitted successfully");
    }).catch(err=>{
      console.err(err);
    })
    console.log("the form is submitted");
  }

  return (
    <div className="Login">
        <h6 class="card2 mb-0 mr-4 mt-2">Log in with:</h6>
        <div class="facebook text-center mr-3">
            <div class="fa fa-facebook"></div>
        </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}