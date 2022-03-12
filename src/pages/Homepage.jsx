import React from 'react'
import logo from '../assets/logo.svg' //las fotos se importan como si fueran un componente

import Title from '../components/Title' //Asi llamo a los componentes, si estan bien hechos se autocompleta la direccion
//Aqui es una funcion, o componente que tiene un return de html ajuro para que react lo denderice
import {useState} from "react"
import { useEffect } from 'react';
import Moviecard from '../components/Moviecard/moviecard';
import Navbar from '../components/Navbar/Navbar';

export default function Homepage() {
  
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log(counter);

  },[counter]);
  
  
  return (
    <div>
      <Navbar/>




      <Title color="red" fontSize="40px"/>
      <Title color="blue" fontSize="60px" centered={true}/>

      <Moviecard titulo={"maria maria"} idioma={"español"} urlimagen={"https://es.web.img3.acsta.net/pictures/19/09/03/16/58/5053583.jpg"} popularidad={"7/10"}/>

      

     
      



    
    </div>
  )
}

//<button onClick={()=>{
 // setCounter(counter+1);
        



//}}>Counter:{counter}</button>