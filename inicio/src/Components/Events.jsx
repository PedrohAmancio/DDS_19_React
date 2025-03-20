import React from "react";

export const Events = () => {
  const teste = (e) => {
    // e = as propriedades do evento que chamou a função
    console.log(e);

    //console.log("Testei o segundo botão");
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("Testei o primeiro botão ");
        }}
      >
        Cli k aqui
      </button>
      <button onClick={teste}>
        Cli k 2
    </button>
    </div>
  );
};

export default Events;
