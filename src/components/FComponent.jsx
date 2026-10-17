import React from "react";

const FirstComponent = () => {
  return (
    <div>
      <h1>Componente h1</h1>
      <p>Este es un parrafo</p>
    </div>
  );
};

export const Main = () => {
  return (
    <div>
      <p>Main usa a FirstComponent:</p>
      <FirstComponent />
    </div>
  );
};

export default FirstComponent;
