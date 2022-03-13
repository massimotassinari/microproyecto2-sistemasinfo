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
      <Carddetail titulo={"Terminator"} idioma={"español"} urlimagen={"https://es.web.img3.acsta.net/pictures/19/09/03/16/58/5053583.jpg"} popularidad={"7/10"} genero={"accion"} presupuesto={"10M"} descripcion={"Un bicho malisimo"} fecha={"12/21/34"} estado={"Disponible"} />
            
      <div>
      <Link to="/listado" className={styles.Buttong}>Listado Completo de peliculas</Link>
      </div>
    </div>
  )
}