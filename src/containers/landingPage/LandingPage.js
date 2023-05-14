import OurShop from '../../components/fragments/landingFragments/ourShop/OurShop'

import Collection from '../../components/fragments/landingFragments/collection/Collection'
import WhyPakty from '../../components/fragments/landingFragments/whyPakty/WhyPakty'
import PaktyApp from '../../components/fragments/landingFragments/paktyApp/PaktyApp'
import OurBlog from '../../components/fragments/landingFragments/ourBlog/OurBlog'
import classes from './LandingPage.module.css'

import BecomePro from '../../components/fragments/landingFragments/becomePro/BecomePro'
import SliderLanding from '../../components/fragments/landingFragments/sliderLanding/SliderLanding'

const LandingPage = ({ products, inspirationData }) => {
  return (
    <div className={classes.container}>
      <SliderLanding
        image="/assets/img/slider-1.jpg"
        title="Pakty your space in 3D"
        content="Visualize 3D furnitures in your project before shopping"
        linkTo="#"
        buttonLabel="Design my space"
      />

      <Collection
        title="Get inspired by our Collection"
        subtitle="Discover our latest work by categories"
        numberCardGallery={1}
        showbtn={true}
        onePageProducts={inspirationData}
      />

      <OurShop products={products} />

      <WhyPakty />

      <PaktyApp />
      <div className={classes.ourBlogContainer}>
        <OurBlog showTitle={true} />
      </div>

      <BecomePro />
    </div>
  )
}

export default LandingPage
