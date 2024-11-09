import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],  
  style: 'normal',         
  subsets: ['latin'],      
});



const Navbar = () => {
  return (
    <div className ={styles.navbarContainer}>
      <h1 className = {`${styles.h1} ${roboto.className}`}>TechNest</h1>


      <div>
        <nav>
          <ul className = {styles.navList}>
            <li className = {styles.navItem}><Link href = '/'>Home</Link></li>
            <li className = {styles.navItem}><Link href = '/services'>Services</Link></li>
            <li className = {styles.navItem}><Link href = '/contact'>Contact</Link></li>
            <li className = {styles.navItem}><Link href = '/about'>About</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
