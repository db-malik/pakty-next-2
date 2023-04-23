// import AppFragmentComponent from '../../_components/_fragments/app-fragment'
// import BecomeProComponent from '../../components/fragments/become-pro/BecomePro'
// import Collection from '../../components/fragments/collection/Collection'
// import OurBlogComponent from '../../_components/_fragments/our-blog'
import OurShop from '../../components/fragments/landingFragments/ourShop/OurShop'

// import CardGalery from '../../components/cards/cardGallery/CardGalery'
import Collection from '../../components/fragments/landingFragments/collection/Collection'
import WhyPakty from '../../components/fragments/landingFragments/whyPakty/WhyPakty'
import PaktyApp from '../../components/fragments/landingFragments/paktyApp/PaktyApp'
import OurBlog from '../../components/fragments/landingFragments/ourBlog/OurBlog'
// import WhyPaktyComponent from '../../_components/_fragments/why-pakty'
import classes from './LandingPage.module.css'

//mock data
import { collectionData } from '/data/collectionData'
import BecomePro from '../../components/fragments/landingFragments/becomePro/BecomePro'
import SliderLanding from '../../components/fragments/landingFragments/sliderLanding/SliderLanding'

const LandingPage = () => {
  const prod = collectionData
  return (
    <>
      <SliderLanding
        image="/assets/img/slider-1.jpg"
        title="Pakty your space in 3D"
        content="Visualize 3D furnitures in your project before shopping"
        linkTo="#"
        buttonLabel="Design my space"
      />

      <div className={classes.mainContainer}>
        <div className="containerWhite">
          <Collection
            title="Get inspired by our Collection"
            subtitle="Discover our latest work by categories"
            numberCardGallery={1}
            showbtn={true}
            onePageProducts={prod}
          />
        </div>
        <div className="containerColored">
          <OurShop />
        </div>
        <div className="containerWhite">
          <WhyPakty />
        </div>
        <div className="containerColored">
          <PaktyApp />
        </div>
        <div className="containerWhite">
          <OurBlog showTitle={true} />
        </div>
        <div className="containerColored">
          <BecomePro />
        </div>
      </div>
    </>
  )
}

export default LandingPage
