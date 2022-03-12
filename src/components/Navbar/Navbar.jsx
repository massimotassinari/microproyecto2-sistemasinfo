import React from 'react'
import styles from  "./Navbar.module.css" //Importar el css

export default function Navbar() {
  return (
    <div>
        <nav>
        <button class="nav-button" onclick="action()">Menu</button>
        <a href="./" class="nav-enlace desaparecer">Home</a>
        <a href="./Login" class="nav-enlace desaparecer">Login</a>
        <a href="./Registro" class="nav-enlace desaparecer">Registro</a>
        <a href="./Listado" class="nav-enlace desaparecer">Peliculas</a>
        
      </nav>
    </div>
  )
}
