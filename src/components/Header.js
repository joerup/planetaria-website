import React from 'react'
import { default as NextLink } from 'next/link'
import styles from '../styles/headfoot.module.css'

export default function Header({ props }) {
  return(
    
    <header className={styles.navbar}>
      <a href="/">
        <div className={styles.navleft}>
          <img className={styles.logo} src="/images/Planetaria.png"/>
          <p className={styles.title}>Planetaria</p>
        </div>
      </a>

      <div className={styles.navright}>

        <div className={styles.dropdown}>
          <img className={styles.dropbutton} src="https://img.icons8.com/metro/26/ffffff/menu.png"/>
          <div className={styles.dropdowncontent}>
            <a href="/support">Support</a>
            <a href="/privacy">Privacy</a>
            <a href="https://apps.apple.com/is/app/planetaria/id1546887479">App</a>
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
        <a href="https://apps.apple.com/is/app/planetaria/id1546887479"><p className={styles.rowItem}>App</p></a>
        
      </div>

      

    </header>
  )
}