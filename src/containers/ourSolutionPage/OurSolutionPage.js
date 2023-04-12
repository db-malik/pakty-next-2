import React from 'react'
import Slider from '../../components/fragments/comonFragment/slider/Slider'
import DownloadPaktyApp from '../../components/fragments/ourSolutionFragments/downloadPaktyApp/DownloadPaktyApp'
import classes from './OurSolutionPage.module.css'
const OurSolutionPage = () => {
  return (
    <>
      <Slider
        type={'solution'}
        image="/assets/img/app-slider.jpg"
        title="Pakty app is your ultimate solution for creating and managing your room decoration."
        content=""
        linkTo=""
        buttonLabel=""
      />
      <div className={classes.container}>
        <DownloadPaktyApp />
      </div>
    </>
  )
}

export default OurSolutionPage
