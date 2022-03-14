import React from 'react'
import styles from "./Navbar.module.css"
import {BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


export default function Navbar() {
  const { user } = useContext(UserContext);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <ul className={styles.navbarContainer}>
      <li>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </li>

      {!user ? (
        <li className={styles.rightSide}>
          <div className={styles.container}>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </div>

          <div className={styles.container}>
            <Link to="/registro" className={styles.link}>
              Register
            </Link>
          </div>
        </li>
      ) : (
        <li className={styles.rightSide}>
          <div className={styles.container}>{user.name}</div>
          <div className={styles.container}>
            <Link to="/listado" className={styles.link}>
              Listado
            </Link>
          </div>

          <div className={styles.button}>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        
        </li>
      )}
    </ul>

  )
}

