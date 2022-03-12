

import styles from  "./Moviecard.module.css" //Importar el css
import React from 'react'
import Detalles from "../../pages/Detalles"

export default function Moviecard({titulo, idioma, urlimagen, popularidad}) {


  return (
<div className={styles.Media}>
            <div className={styles.Image} >

            <a href="./Detalles"> 
            <img src={urlimagen} className={styles.Image}/>
            </a>
    
            </div>  

            <div className={styles.Titulo}>{titulo}</div>
            <div className={styles.Idioma}>{idioma}</div>
            <div className={styles.Idioma}>{popularidad}</div>



</div>
  )
}
