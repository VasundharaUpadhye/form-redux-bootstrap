import React, { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() =>
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
  );

  function handleLogin(e) {
    return setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function handleRegister(e) {
    return setRegister({ ...login, [e.target.name]: e.target.value });
  }

  return (
    <Container fluid="md">
      <h3 className="text-center fw-bolder">FORM</h3>

      <Row>
        <Col>
          <h4 className="text-center fw-bolder">LOGIN</h4>

          <Row>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={login.email}
                  onChange={handleLogin}
                />
                <Form.Control.Feedback type="invalid">
                  @ is compulsory
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={login.password}
                  onChange={handleLogin}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Row>
        </Col>

        <Col>
          <h4 className="text-center fw-bolder">REGISTRATION</h4>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={register.firstName}
                    onChange={handleRegister}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    value={register.lastName}
                    onChange={handleRegister}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={register.email}
                  onChange={handleRegister}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={register.password}
                  onChange={handleRegister}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter Password"
                  value={register.confirmPassword}
                  onChange={handleRegister}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                REGISTER
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
