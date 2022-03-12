

import styles from  "./Carddetail.module.css" //Importar el css
import React from 'react'
import Detalles from "../../pages/Detalles"

export default function Carddetail({titulo, idioma, urlimagen, popularidad,Genero,Presupuesto,Descripcion,Fecha,Estado}) {


  return (
<div className={styles.Media}>
            <div className={styles.Image} >

            
            <img src={urlimagen} className={styles.Image}/>
            
    
            </div>  

            <div className={styles.Titulo}>{titulo}</div>
            <div className={styles.Idioma}>{idioma}</div>
            <div className={styles.Idioma}>{popularidad}</div>
            <div className={styles.Idioma}>{Genero}</div>
            <div className={styles.Idioma}>{Presupuesto}</div>
            <div className={styles.Idioma}>{Descripcion}</div>
            <div className={styles.Idioma}>{Fecha}</div>
            <div className={styles.Idioma}>{Estado} </div>

</div>
  )
}