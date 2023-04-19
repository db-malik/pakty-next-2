import { Layout } from 'antd'
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
  { label: 'Our collection', link: '/user/collection' },
  { label: 'Customize my space', link: '/user/customize-design' },
]

const HeaderUser = ({ user }) => {
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
  console.log(router.pathname)
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
        <Link href="/user/dashboard">
          <Logo />
        </Link>
      </div>
      <ul className={classes.navbarContainer}>
        {navItem.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={
              router.pathname === item.link ? classes.active : classes.desactive
            }
          >
            <li
              className={
                router.pathname === '/'
                  ? classes.navItem
                  : classes.nothomeNavItem
              }
            >
              {item.label}
            </li>
          </Link>
        ))}

        <li className={classes.btnContainer}>
          <PrimaryBtn showArrow={false} linkTo="">
            DESIGN MY PROJECT
          </PrimaryBtn>
        </li>
        <li className={classes.userImageContainer}>
          {' '}
          <Image src={user.image} fill alt="user image" />
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
export default HeaderUser
