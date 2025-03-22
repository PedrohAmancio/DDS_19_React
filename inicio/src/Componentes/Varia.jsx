import React from 'react'
import { useState } from 'react'

const Varia = () => {
    // Variaveis padrão do javascript
  let algo = 10;
  console.log("Valor inicial de algo :" + algo)
//   Variaveis utilizando o hook useState
const [number, setNumber] = useState(7);
console.log("Minha variavel number: " + number)    
return (
    <div>
        <p>Minha variavel: {algo}</p>
        <button 
        onClick={() => {algo = 20; 
        console.log("Novo valor de algo é" + algo)
        }} >
            Alterar
        </button>
        <hr />
        <p>Valor da variavel number:{number}</p>
        <button 
        onClick = {() => {setNumber(number + 5)}}>
            Aumentar
        </button>
 <hr />
            <button 
        onClick = {() => {setNumber(number - 5)}}>
            Diminuir
        </button>
        <hr />
        <button 
        onClick = {() => {setNumber(7)}}>
            Resetar
        </button>
    </div>
    
  )
}

export default Varia