// import AppFragmentComponent from '../../_components/_fragments/app-fragment'
// import BecomeProComponent from '../../components/fragments/become-pro/BecomePro'
// import Collection from '../../components/fragments/collection/Collection'
// import OurBlogComponent from '../../_components/_fragments/our-blog'
import OurShop from '../../components/fragments/landingFragment/ourShop/OurShop'

// import CardGalery from '../../components/cards/cardGallery/CardGalery'
import Collection from '../../components/fragments/landingFragment/collection/Collection'
import Slider from '../../components/fragments/landingFragment/slider/Slider'
// import WhyPaktyComponent from '../../_components/_fragments/why-pakty'

const LandingPage = () => {
  return (
    <div>
      <Slider
        title="Pakty your space in 3D"
        image={require('../../assets/img/slider-1.jpg')}
        content="Visualize 3D furnitures in your project before shopping"
        action="Design my space"
      ></Slider>
      <Collection
        title="Get inspired by our Collection"
        subtitle="Discover our latest work by categories"
        numberCardGallery="1"
      />
      <OurShop />
      {/* <Collection color={'blue'} rows={2} />
      <OurShop /> */}
      {/* <WhyPaktyComponent></WhyPaktyComponent> */}
      {/* <AppFragmentComponent></AppFragmentComponent> */}
      {/* <OurBlogComponent title='Our blog'></OurBlogComponent> */}
      {/* <BecomeProComponent></BecomeProComponent> */}
    </div>
  )
}

// Fetching data from the js file

export default LandingPage
