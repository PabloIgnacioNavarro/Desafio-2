import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SocialButton from "./components/SocialButton";

function App() {
  const validarForm = function (e) {
    e.preventDefault();
    if (
      email.length > 0 &&
      password.length > 0 &&
      confirmpassword.length > 0 &&
      password === confirmpassword
    ) {
      alert("Sesion iniciada");
    } else {
      alert("Completa todos los campos!");
    }
  };
  const [name, setName] = useState("");
  const handleName = function (e) {
    e.preventDefault;
    setName(e.target.value);
    console.log(name);
  };
  const [email, setEmail] = useState("");
  const handleEmail = function (e) {
    e.preventDefault;
    setEmail(e.target.value);
    console.log(email);
  };
  const [password, setPassword] = useState("");
  const handlePassword = function (e) {
    e.preventDefault;
    setPassword(e.target.value);
    console.log(password);
  };
  const [confirmpassword, setConfirmPassword] = useState("");
  const handleConfirmPassword = function (e) {
    e.preventDefault;
    setConfirmPassword(e.target.value);
    console.log(confirmpassword);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Crea una cuenta</h1>
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <SocialButton icono="fa-brands fa-github"></SocialButton>
        <SocialButton icono="fa-brands fa-facebook"></SocialButton>
        <SocialButton icono="fa-brands fa-instagram"></SocialButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <p>O usa tu email para registrarte</p>
      </div>
      <Form onSubmit={validarForm} className="border p-3">
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="name"
            placeholder="Nombre"
            onChange={(e) => {
              handleName(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            placeholder="tuemail@ejemplo.com"
            onChange={(e) => {
              handleEmail(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => {
              handlePassword(e);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="confirmpassword"
            placeholder="Confirma tu contraseña"
            onChange={(e) => {
              handleConfirmPassword(e);
            }}
          />
        </Form.Group>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignContent: "center",
            justifyContent: "center",
            padding: "10px",
            margin: "10px",
          }}
        >
          <Button variant="success" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>
    </>
  );
}

export default App;
