 import { useState } from "react";
export default function Main(){
    const [nome,setNome] = userstate("")  //(0) number // (true) boolean
    const  [telefone,setTelefone] = userstate(0)
   
   return(  <main>
      <input
      type="text"
      nome="" id=""
      onChange={(event)=> setNome(event.target.value)}
      />
      (nome)

      <input
      type="text"
      telefone="" id=""
      onChange={(event)=> setTelefone(event.target.value)}
      />
      (telefone)
             </main>
    
    );
}