/**
 * The function exports a React component that renders the Our Solution page, which
 * includes various components related to Pakty app's features.
 * @returns The `OurSolutionPage` component is being returned, which contains a
 * `Slider` component and several other components related to the Pakty app
 * solution.
 */
import React from 'react'
import CardContactUs from '../../components/cards/cardContactUs/CardContactUs'
import Slider from '../../components/fragments/comonFragment/slider/Slider'
import DownloadPaktyApp from '../../components/fragments/ourSolutionFragments/downloadPaktyApp/DownloadPaktyApp'
import Explore3D from '../../components/fragments/ourSolutionFragments/explore3D/Explore3D'
import Plans from '../../components/fragments/ourSolutionFragments/plans/Plans'
import PracticalApp from '../../components/fragments/ourSolutionFragments/practicalApp/PracticalApp'
import TryOurFree3D from '../../components/fragments/ourSolutionFragments/tryOurFree3D/TryOurFree3D'
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
      <div className="containerColored">
        <div className={classes.containerFragment}>
          <DownloadPaktyApp />
          <PracticalApp />
          <Explore3D />
          <TryOurFree3D />

          <Plans />
          <CardContactUs />
        </div>
      </div>
    </>
  )
}

export default OurSolutionPage
