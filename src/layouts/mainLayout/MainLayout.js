import Footer from '../../components/fragments/footer/Footer'
import Header from '../../components/fragments/header/Header'
import classes from './MainLayout.module.css'

// import { Inter } from 'next/font/google'
// const inter = Inter({
//   subsets: ['Montserrat'],
//   variable: '--inter-font',
// })
const MainLayout = ({ children }) => {
  return (
    <div className={` ${classes.container}`}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
