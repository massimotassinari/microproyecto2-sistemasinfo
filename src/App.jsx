//En el app va absolutamente todooooooooo los componentes
import logo from './assets/logo.svg' //las fotos se importan como si fueran un componente
import './App.css'
import Title from './components/Title' //Asi llamo a los componentes, si estan bien hechos se autocompleta la direccion
//Aqui es una funcion, o componente que tiene un return de html ajuro para que react lo denderice
import {useState} from "react"
import { useEffect } from 'react';

function App() {
  

  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log(counter);

  },[counter]);

  return (
    <div className="App">
      <Title color="red" fontSize="40px"/>
      <Title color="blue" fontSize="60px" centered={true}/>

     
      <button onClick={()=>{
        setCounter(counter+1);
        



      }}>Counter:{counter}</button>



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
        <h1>holas</h1>
        
        </p>
        <p>
          <button type="button">
            count is: 0 
          </button>
        </p>
        
        
      </header>
    </div>
  )
}
//Este export default me permite importar en optro documento, es importante para el rendwer
export default App
