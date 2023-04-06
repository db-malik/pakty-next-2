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
import SliderLanding from '../../components/fragments/landingFragments/sliderLanding/SliderLanding'
// import WhyPaktyComponent from '../../_components/_fragments/why-pakty'

const LandingPage = () => {
  return (
    <div>
      <SliderLanding />

      <Collection
        title="Get inspired by our Collection"
        subtitle="Discover our latest work by categories"
        numberCardGallery={1}
        showbtn={true}
      />
      <OurShop />
      <WhyPakty />
      <PaktyApp />
      <OurBlog />

      {/* <BecomeProComponent></BecomeProComponent> */}
    </div>
  )
}

export default LandingPage
