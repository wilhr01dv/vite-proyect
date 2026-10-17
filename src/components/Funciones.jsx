import React from "react";

const Funciones = () => {
  const frutas = ["manzana", "pera", "sandia"];

  return (
    <div>
      {frutas.map((fruta) => {
        return <li key={fruta}>Fruta: {fruta}</li>;
      })}
    </div>
  );
};

export default Funciones;
