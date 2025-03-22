import { useState } from "react"
const ListRender = () => {
 
   
  const [users] = useState([
    {
        id: 1,
        name: "Jesus", 
        number:25,
    },
    {
        id:7,
        name: "Cristiano Ronaldo",
        number:7,
    },
    {
        id:10,
        name: "Neymar Jr",
        number: 10
    }

  ]);
  const [Lista, setLista] = useState(["Barbara", "Pedro", "Ana", "Jorge", "Gregory"]);
  const [number,setNumber] = useState(0);
    return (
    <div>
        {/* <ul> */}
            {/* //Lista com index chave */}
            {/* {Lista.map((item,index) =>( //Item = valor achado ao percorrer */}
                {/* <li key = {index}>{item}</li> */}
            {/* ))} */}
        {/* </ul> */}
        <hr />
       
        <button 
            onClick = {() =>{
                setNumber(number + 1)
                console.log(...Lista);
                setLista(...Lista, number);

            }}>
            Aumentar
        </button>
        {/* <ul>
            {numero.map(({numero,index}) =>( 
            <li key = {index}>{numero}</li>

            ))}

        </ul>
        {/* Lista com id de chave */}
            {/* {users.map((usuario) => (
                // console.log(usuario)
                <h2 key ={usuario.id}>O nome é {usuario.name} e o seu numero é {usuario.number}</h2>
        ))} */} 
    </div>
 
        )
}

export default ListRender