import styles from  "./Carddetail.module.css" //Importar el css
import React from 'react'
import Detalles from "../../pages/Detalles"

export default function Carddetail({titulo, idioma, urlimagen, popularidad,genero,presupuesto,descripcion,fecha,estado}) {


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
            <div className={styles.Idioma}>Genero: {genero}</div>
            <div className={styles.Idioma}>Presupuesto:{presupuesto}</div>
            <div className={styles.Idioma}>Descripcion:{descripcion}</div>
            <div className={styles.Idioma}>Fecha: {fecha}</div>
            <div className={styles.Idioma}>Estado: {estado}</div>

</div>
</div>
  )
}