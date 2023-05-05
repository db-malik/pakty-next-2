import Image from 'next/image'
import CardBigMedia from '../../../cards/cardBigMedia/cardBigMedia'
import classes from './WhyPakty.module.scss'
const WhyPakty = () => {
  return (
    <div className={classes.whyPaktyContainer}>
      <CardBigMedia
        mediaPosition="left"
        child={<Image src="/assets/img/video.jpg" fill alt="img" />}
        title="Why Pakty"
        description1="Pakty App is the ultimate tool for designing and transforming your home. Whether you're a professional designer or just looking to spruce up your living space, Pakty App provides a simple, intuitive, and cost-effective solution to interior design. Try Pakty App today and see for yourself why it's the ultimate design tool for your home.
        "
        buttonContent="LEARN MORE"
        linkTo="/solution"
      />
    </div>
  )
}

export default WhyPakty
