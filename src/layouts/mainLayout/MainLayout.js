import Footer from '../../components/fragments/footer/Footer'
import Header from '../../components/fragments/header/Header'
import classes from './MainLayout.module.css'

const MainLayout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.children}>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
