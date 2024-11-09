import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className = {styles.heroSection}>
      <h1 className = {styles.h1}>Unlock The Power Of Technology With Expert Digital Services at TechNest
      </h1>
    <div>
    
  
      </div>
      <div className = {styles.buttonContainer}>
        <button className = {styles.button}><Link href = '/services'>services</Link></button>
      </div>

    </div>
    
  )
}

export default Hero
