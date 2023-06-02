import React from 'react'
import { default as NextLink } from 'next/link'
import styles from '../styles/headfoot.module.css'

export default function Header({ props }) {
  return(
    
    <header className={styles.navbar}>
      <a href="/">
        <div className={styles.navleft}>
          <img className={styles.logo} src="/images/Logo.png"/>
        </div>
      </a>

      <div className={styles.navright}>

        <div className={styles.dropdown}>
          <img className={styles.dropbutton} src="https://img.icons8.com/metro/26/ffffff/menu.png"/>
          <div className={styles.dropdowncontent}>
            <a href="/">Home</a>
            <a href="/support">Support</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>

        <a href="/">
          <p className={styles.rowItem}>Home</p>
        </a>
        <a href="/support">
          <p className={styles.rowItem}>Support</p>
        </a>
        <a href="/privacy">
          <p className={styles.rowItem}>Privacy</p>
        </a>
        
      </div>

      

    </header>
  )
}