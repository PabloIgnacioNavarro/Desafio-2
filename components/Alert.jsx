import Alert from "react-bootstrap/Alert";

function BasicExample() {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;

//Esta es una alerta de peligro, ¡échale un vistazo!//
//Esta es una alerta de éxito, ¡échale un vistazo!//
