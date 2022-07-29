import React from 'react'
import styles from '../styles/Navbar.module.css'
import {BrightnessHighFill, List, ListNested} from 'react-bootstrap-icons'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <BrightnessHighFill className={styles.icon}/>
      <ListNested  className={styles.icon}/>
    </div>
  )
}

export default Navbar