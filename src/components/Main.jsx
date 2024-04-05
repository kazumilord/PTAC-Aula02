 import { useState } from "react";
export default function Main(){
    const [nome,setNome] = userstate("")  //(0) number // (true) boolean
    const  [telefone,setTelefone] = userstate(0)
    const[listaContato,setListaContatos] = useState([])
    
    
    const registrar = (event) =>{
        event.preventDefault();
        alert ("olá")
        setListaContatos([...listaContato,
{
           nomeSalvo:nome,
           telefoneSalvo:telefone,

}
        ])

     } ;
     console.table(listaContato);
   return( 
     <main>
      <label htmlFor="nome">Nome:</label> 
      <input
      type="text"
      nome="nome-contado" 
      id="nome"
      value={nome}
      onChange={
   
        (event)=> setNome(event.target.value)}
      />

      (nome)
      <label htmlFor="nomtelefone">Telefone:</label>
      <input
      type="tel"
      nome="telefone-contato" 
      id="telefone"
      value={telefone}
      onChange={(event)=> setTelefone(event.target.value)} />
     {Number}
     <button><enviar></enviar></button>
     <form>
     {nome} {telefone}
     <br></br>
        
        </form>
        {listaContato.map((contado,index)=> <div key = {index}>

              <p>contado.nomeSalvo</p>
              <p>contado.telefoneSalvo</p>
        </div>
                        )}

             </main>
    
    );
}