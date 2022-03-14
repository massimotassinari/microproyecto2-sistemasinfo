import React from 'react'
import Carddetail from '../components/Carddetail/carddetail';
import {BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

import Title from '../components/Title'
import styles from  "../components/Carddetail/Carddetail.module.css"
 

export default function Detalles() {
  return (
    <div>
      
      <Title color="black" fontSize="60px" centered={true}/>
      <Carddetail titulo={"Spider-Man: No Way Home"} idioma={" Español"} urlimagen={"http://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"} popularidad={" 8.3"} genero={" Accion"} presupuesto={" 100 M"} descripcion={" Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."} fecha={" 2021-12-15"} estado={" Estrenada"} />
            
      <div>
      <Link to="/listado" className={styles.Buttong}>Listado Completo de peliculas</Link>
      </div>
    </div>
  )
}