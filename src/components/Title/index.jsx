//Para generar componentes rapido con la extecion hacemos "rfc"
//genera algo asi
//import React from 'react'
//
//export default function index() {
//  return (
//    <div>index</div>
//  )
//}
import styles from  "./Title.module.css" //Importar el css
import React from 'react'

function Title({color,centered,fontSize}) {
  return (
    <h2 
    className={styles.appTitle}
    style={{
        color: color,
        fontSize: fontSize,
        textAlign: centered ? "center" : "left",
    }}>PELICULAS</h2>
  )
}


//Recordar siempre el export default
export default Title