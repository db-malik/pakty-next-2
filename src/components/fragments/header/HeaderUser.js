import { Button, Col, Layout, Menu, Row } from 'antd'
import FeatherIcon from 'feather-icons-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import classes from './HeaderUser.module.scss'
import { useRouter } from 'next/router'
import Image from 'next/image'
import paktylogo from '../../../assets/img/logo.png'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'
import Logo from './logo/Logo'

const navItem = [
  { label: 'Our Collection', link: '/inspiration' },
  { label: 'Our Store', link: '/store' },
]

const Header = () => {
  const { Header } = Layout
  const [navbar, setNavbar] = useState(false)
  const router = useRouter()
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
      className={`${classes.headerContainer}  ${navbar ? 'normal' : 'header-custom'}`}
      style={
        navbar
          ? {
              backgroundColor: '#fff',
              color: '#0A3556',
            }
          : navStyle
      }
    >
      <div className={classes.navBarContainer}>
        <div className={classes.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <ul className={classes.navBar}>
          {navItem.map((item, index) => (
            <Link key={index} href={item.link} className={router.pathname === item.link ? classes.active : classes.desactive}>
              <li className={router.pathname === '/' ? classes.navItem : classes.notHomeNavItem}>{item.label}</li>
            </Link>
          ))}
        </ul>

        <ul className={classes.userBar}>
          <span className={classes.hifen}>|</span>
          
          <li className={classes.designBtn}>
            <PrimaryBtn style={`${classes.btnDimension}`} showArrow={false} linkTo="/design-project">
              DESIGN MY PROJECT
            </PrimaryBtn>
            <div className={classes.userImage}><Image fill src='/assets/img/user.png'></Image> </div>
          </li>
         
          <li className={classes.cart}>
            <div className={classes.cart}>
              <Link href="/cart">
                <FeatherIcon
                  style={{
                    height: 31,
                  }}
                  className={router.pathname === '/cart' ? 'active' : 'desactive'}
                  icon={'shopping-cart'}
                ></FeatherIcon>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
