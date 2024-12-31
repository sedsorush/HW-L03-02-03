/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./navbar.module.scss"

const NavBar = () => {
  return (
    <div className={styles.container}>
        <h1>WELCOME</h1>
        <ul>
            <li><NavLink className={({isActive}) => (isActive ? "active":"non-active")} to="/">Home</NavLink></li>
            <li><NavLink className={({isActive}) => (isActive ? "active":"non-active")} to="/aboutus">About Us</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar