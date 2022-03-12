import React from 'react'
import logo from '../assets/logo.svg' //las fotos se importan como si fueran un componente

import Title from '../components/Title' //Asi llamo a los componentes, si estan bien hechos se autocompleta la direccion
//Aqui es una funcion, o componente que tiene un return de html ajuro para que react lo denderice
import {useState} from "react"
import { useEffect } from 'react';

export default function Homepage() {
  
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log(counter);

  },[counter]);
  
  
  return (
    <div>

<Title color="red" fontSize="40px"/>
      <Title color="blue" fontSize="60px" centered={true}/>

     
      <button onClick={()=>{
        setCounter(counter+1);
        



      }}>Counter:{counter}</button>



    
    </div>
  )
}
