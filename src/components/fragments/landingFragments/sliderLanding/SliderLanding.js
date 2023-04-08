import React from 'react'
import Slider from '../../comonFragment/slider/Slider'
import classes from './SliderLanding.module.css'
const SliderLanding = () => {
  return (
    <Slider
      type="home"
      title="Pakty your space in 3D"
      image="/assets/img/slider-1.jpg"
      content="Visualize 3D furnitures in your project before shopping"
      buttonLabel="Design my space"
      linkTo="#"
    />
  )
}
export default SliderLanding
