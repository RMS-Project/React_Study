import React,{ useState } from 'react';
import './App.css';

function App(props) {
  const [ user, setUser ] = useState('Rodrigo')

  return (
    /* Utilização de fragment. Para conter vários elementos */
    /* para serem renderizados. */
    <>
      <p>{ user }</p>
      {/* Utiliza as propriedades vindas com parâmetro de index.js. */}
      <h1>{props.title} {props.user}</h1>
      <input type="text" name="user" className="userInput" id="user" placeholder="Usuário"/>
      <button type='button'>Pesquisar</button>
    </>
  );
}

export default App;
