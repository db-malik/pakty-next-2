import { Button, Col, Layout, Menu, Row } from 'antd'
import FeatherIcon from 'feather-icons-react'
import { useEffect, useState } from 'react'
// import { useNavigate, Link, useLocation } from 'react-router-dom'

import classes from './Header.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Image from 'next/image'
import paktylogo from '../../../assets/img/logo.png'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'

const navItem = [
  { label: 'Inspiration', link: '/inspiration' },
  { label: 'Our Store', link: '/store' },
  { label: 'Magazine', link: '/magazine' },
  { label: 'Solution', link: '/our-solution' },
  { label: 'Become Pro', link: '/become-pro' },
  { label: '|', link: '' },
  { label: 'Login', link: '/login' },
]

const HeaderComponent = () => {
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
          float: 'right',
          width: '100%',
        }
      : {
          backgroundColor: 'transparent',
          color: '#0A3556',
          float: 'right',
          width: '100%',
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
    <Header
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 1,
        width: '100%',
        display:
          router.pathname === '/login' ||
          router.pathname === '/signup' ||
          router.pathname === '/resetPassword' ||
          router.pathname.includes('/user') ||
          router.pathname === '/speener'
            ? 'none'
            : 'block',
      }}
      className={navbar ? 'normal' : 'header-custom'}
    >
      <Row>
        <Col span={4}>
          <Link href="/">
            <div
              style={{
                width: 120,
                height: 31,
                margin: '16px 24px 16px 0',
              }}
            >
              <Image
                alt="logo"
                style={{ float: 'left' }}
                src={paktylogo}
              ></Image>
            </div>
          </Link>
        </Col>
        <Col xs={0} lg={12}>
          <Menu
            style={
              navbar
                ? {
                    backgroundColor: '#fff',
                    color: '#0A3556',
                    float: 'left',
                    width: '100%',
                  }
                : navStyle
            }
            mode="horizontal"
            defaultSelectedKeys={['-1']}
            items={navItem.map((data, index) => {
              return {
                key: index,
                label: data.label,
                onClick: () => {
                  navigateTo(data.link)
                },
              }
            })}
          />
        </Col>
        <Col xs={8} lg={0}></Col>
        <Col lg={7} span={6}>
          <Row>
            <Col xs={24} xl={20}>
              <Row>
                <Col style={{ float: 'left' }} span={17}>
                  <Link href="/user/dashbord">
                    <div className={classes.btnContainer}>
                      <PrimaryBtn showArrow={false}>
                        Design my project
                      </PrimaryBtn>
                    </div>
                  </Link>
                </Col>
                <Col xs={0} xl={6}>
                  <FeatherIcon
                    onClick={() => {
                      navigateTo('/card')
                    }}
                    style={{
                      height: 31,
                      margin: '16px 24px 16px 24px',
                    }}
                    className={
                      navbar
                        ? ''
                        : router.pathname === '/'
                        ? 'text-white'
                        : 'text-blue'
                    }
                    icon={'shopping-cart'}
                  ></FeatherIcon>
                </Col>
              </Row>
            </Col>
            <Col xs={0} xl={4}></Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}
export default HeaderComponent
