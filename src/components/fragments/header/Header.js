import { Button, Col, Layout, Menu, Row } from 'antd'
import FeatherIcon from 'feather-icons-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import classes from './Header.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'
import paktylogo from '../../../assets/img/logo.png'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'
import Logo from './logo/Logo'

const navItem = [
  { label: 'Inspiration', link: '/inspiration' },
  { label: 'Our Store', link: '/store' },
  { label: 'Magazine', link: '/magazine' },
  { label: 'Solution', link: '/our-solution' },
  { label: 'Become Pro', link: '/become-pro' },
]

const Header = () => {
  const { Header } = Layout
  const [navbar, setNavbar] = useState(false)
  //const location = useLocation();
  const router = useRouter()
  //const navigate = useNavigate();
  // useRouter is alternative for usenavigate in nextjs
  const navStyle =
    router.pathname === '/'
      ? {
          backgroundColor: 'transparent',
          color: 'white',
        }
      : {
          backgroundColor: 'transparent',
          color: '#0A3556',
        }
  const navigateTo = (url) => {
    router.push(url)
    //navigate(url);
  }
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground)
  })
  return (
    <div
      className={`${classes.container}  ${navbar ? 'normal' : 'header-custom'}`}
      style={
        navbar
          ? {
              backgroundColor: '#fff',
              color: '#0A3556',
            }
          : navStyle
      }
    >
      <div className={classes.logoContainer}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul className={classes.navbarContainer}>
        {navItem.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            classeName={router.pathname === item.link ? 'active' : 'desactive'}
          >
            <li className={classes.navItem}>{item.label}</li>
          </Link>
        ))}

        <li>|</li>

        <li className={`${classes.loginLink}, ${classes.navItem}`}>login</li>
        <li className={classes.btnContainer}>
          <PrimaryBtn showArrow={false} linkTo="">
            DESIGN MY PROJECT
          </PrimaryBtn>
        </li>
        <Link href="/cart">
          <li className={classes.cart}>
            <FeatherIcon
              style={{
                height: 31,
              }}
              className={router.pathname === '/cart' ? 'active' : 'desactive'}
              icon={'shopping-cart'}
            ></FeatherIcon>
          </li>
        </Link>
      </ul>
    </div>
  )
}
export default Header
