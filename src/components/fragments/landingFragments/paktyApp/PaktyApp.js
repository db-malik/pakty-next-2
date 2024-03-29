import React from 'react'
import { CardPaktyApp } from '../../../cards/cardPaktyApp/CardPaktyApp'
import classes from './PaktyApp.module.scss'
const PaktyApp = () => {
  return (
    <div className={classes.cardContainer}>
      <CardPaktyApp
        title="Pakty app is practical and easy to use."
        subtitle="All you need to do is try and choose your design. We created a cozy and suitable atmosphere to work comfortably and explore your creative side."
        imageSrc="/assets/img/app-fragment.jpg"
      ></CardPaktyApp>
    </div>
  )
}

export default PaktyApp
