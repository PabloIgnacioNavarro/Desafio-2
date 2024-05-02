import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  return (
    <>
      <Form className="border p-3">
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="name" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="confirmpassword"
            placeholder="Confirma tu contraseña"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

export default Formulario;
