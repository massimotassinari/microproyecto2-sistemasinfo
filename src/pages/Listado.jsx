import React from 'react'
import logo from '../assets/logo.svg' //las fotos se importan como si fueran un componente
import axios from "axios";
import Title from '../components/Title' //Asi llamo a los componentes, si estan bien hechos se autocompleta la direccion
//Aqui es una funcion, o componente que tiene un return de html ajuro para que react lo denderice
import {useState} from "react"
import {useEffect} from 'react';
import Moviecard from '../components/Moviecard/moviecard';
import Navbar from '../components/Navbar/Navbar';
import Detalles from "../pages/Detalles"
import {BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import styles from  "../components/Moviecard/Moviecard.module.css"


export default function Listado() {
  const [characters, setCharacters] = useState([]);
  const contador = 1
  const fetchCharacters = async () => {

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=8862a4c0fb71af169242fdae33cfd4a0&page=${contador}`
        );
      setCharacters(response.data.results);

    
    } catch (error) {
      console.log({ error });
    }
    
    console.log({characters})

    
  };
  
  useEffect(() => {
    fetchCharacters();
  }, []);
  
  return (
    <div>
      <Navbar/>
      <Title color="black" fontSize="60px" centered={true}/>
      {characters.map((character) => (
            
        <Moviecard titulo={character.original_title} idioma={character.original_language} urlimagen={`http://image.tmdb.org/t/p/w500${character.poster_path}`} popularidad={character.vote_average}/>
            
        ))}
      <div>
      <button onClick={contador+1}>Cargar mas peliculas</button>
      </div>
    </div>
  )
}