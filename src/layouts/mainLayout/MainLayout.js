import Footer from '../../components/fragments/footer/Footer'
import Header from '../../components/fragments/header/Header'
import classes from './MainLayout.module.css'
const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
