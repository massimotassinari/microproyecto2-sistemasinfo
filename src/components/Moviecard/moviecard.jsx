

import styles from  "./Moviecard.module.css" //Importar el css
import React from 'react'
import Detalles from "../../pages/Detalles"
import {
  Link
} from "react-router-dom";

export default function Moviecard({titulo, idioma, urlimagen, popularidad}) {


  return (
<div className={styles.todo}>
<div className={styles.Media}>
            <div className={styles.Image} >

            <a href="./Detalles"> 
            <img src={urlimagen} className={styles.Image}/>
            </a>
    
            </div>  

            <div className={styles.Titulo}>{titulo}</div>
            <div className={styles.Idioma}>Idioma: {idioma}</div>
            <div className={styles.Idioma}>Rating:{popularidad}/10</div>
            <Link to="/detalles" className={styles.Button}>Más información</Link>



</div>
</div>
  )
}
