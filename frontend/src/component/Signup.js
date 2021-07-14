import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/Login.css";
import axios from "axios";

export default function Signup({setLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Formpassword, setFormpassword]= useState("");

function validateForm() {
    return email.length > 0 && password.length > 0 && password === Formpassword;
  }

  function handleSubmit(event){
    const user = {
      name:Name,
      email: email,
      password: password
    };
    axios.post('/create_profile',user).then(res=>{
      if(res.status===200)
      {
        alert("data is submitted");
        setLogin(true);
        localStorage.setItem('login',true);
      }
      else
      {
        alert("your account cannot be created");
      }
    }).catch(err=>{
      console.log(err);
    });
  }
 return (
    <div className="Login">
        <h6 class="card2 mb-0 mr-4 mt-2">Log in with:</h6>
        <div class="facebook text-center mr-3">
            <div class="fa fa-facebook"></div>
        </div>

      <Form onSubmit = {handleSubmit}>

        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

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

        <Form.Group size="lg" controlId="password">
          <Form.Label>Conform Password</Form.Label>
          <Form.Control
            type="password"
            value={Formpassword}
            onChange={(e) => setFormpassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit"  disabled={!validateForm()}>
          Signup
        </Button>
      </Form>
    </div>
  );
}