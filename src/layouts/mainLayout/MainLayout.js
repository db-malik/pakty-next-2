import Footer from '../../components/fragments/footer/Footer'
import Header from '../../components/fragments/header/Header'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
