//Vamos a mostrar los botones de las redes sociales//

import React from "react";

export default function SocialButton({ icono }) {
  return (
    <button style={{ padding: "20px", borderRadius: "100%" }}>
      <i className={icono}></i>
    </button>
  );
}
