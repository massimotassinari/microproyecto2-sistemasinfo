import React from 'react'
import styles from "./Navbar.module.css"
import {BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";



export default function Navbar() {

  return (
    <div>
        <div className = {styles.navbar}>
        <div className = {styles.nav}>
            <p className={styles.titulo}>Cartelera Caracas</p>
            <div className = {styles.items}>
            <Link to="/" className={styles.item}>
              Home
            </Link>
            
            <Link to="/registro" className={styles.item}>
              Register
            </Link>

            <Link to="/login" className={styles.item}>
              Login
            </Link>

            <Link to="/listado" className={styles.item}>
              Listado
            </Link>

            </div>
        </div>
    </div>
    </div>
  )
}
