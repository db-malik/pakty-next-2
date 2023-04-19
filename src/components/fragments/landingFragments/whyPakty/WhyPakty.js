import Image from 'next/image'
import CardBigMedia from '../../../cards/cardBigMedia/cardBigMedia'
import classes from './WhyPakty.module.css'
const WhyPakty = () => {
  return (
    <div className={classes.whyPaktyContainer}>
      <CardBigMedia
        child={<Image src="/assets/img/video.jpg" fill alt="img" />}
        title="Why Pakty"
        description1="Do you think it's hard to find an aesthetic decoration at an affordable price?"
        description2="With Packty, you can customize your budget. And enhance your decor with 3D furniture images visualized in augmented reality."
        buttonContent="OUR SOLUTION"
        linkTo="/solution"
      />
    </div>
  )
}

export default WhyPakty
