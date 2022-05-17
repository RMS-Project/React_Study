/* Somente nome importa o pacore */
import React,{useState} from 'react';
import axios from 'axios'


/* Com " ./ " importa o arquivo. */
import './App.css';

function App(props) {

  /* Componetes controlados */
  const [ user, setUser ] = useState('')

  /* Consumir dados de uma API. */
  function handleSearch() {

    /* API do GitHub que retorna qualquer usuário:    */
    /* https://api.github.com/users/RMS-Project       */
    /* Retornas todos os repositórios:                */
    /* https://api.github.com/users/RMS-Project/repos */

    /* .get - Pois a URL retorna via método get. */
    /* .then - Porque retorna uma promise. */
    axios.get(`https://api.github.com/users/${user}/repos`).then(
      
      /* response - É a resposta com o cabeçalho e os dados vindos em um objeto */
      /*            que possui o atributo data com os dados dos repositórios */
      response => console.log(response.data)
    )
}
 
  return (
    /* Utilização de fragment. Para conter vários elementos */
    /* para serem renderizados. */
    <>
      {/*<p>{user}</p>*/}
      <p>Digite o usuário do GitHub para buscar os seus repositório</p>
      {/* Utiliza as propriedades vindas com parâmetro de index.js. */}
      <h1>{props.title} {props.user}</h1>

      {/* React trabalha com CamelCase para as propriedades. ex: events.*/}
      {/* sempre que ocorrer uma mudança apresente e => console.log(e.target.value) */}
      <input className="userInput" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)}/>
      <button type='button' onClick={handleSearch}>Pesquisar</button>
    </>
  );
}

export default App;