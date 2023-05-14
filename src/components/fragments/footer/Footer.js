// import React from 'react'

import { Button, Col, Input, Layout, List, Row } from 'antd'
import classes from './Footer.module.scss'
import { useLocation } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const logo = require('../../../assets/img/light-logo.png')
import Image from 'next/image'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'
const { Footer } = Layout

const FooterComponent = () => {
  // const location = useLocation();
  const router = useRouter()
  return (
    <Footer className={classes.container}>
      <div className={classes.leftContainer}>
        <div className={classes.imageContainer}>
          <Image src="/assets/img/light-logo.png" alt="logo" fill />
        </div>

        <p className={classes.address}>
          pakty@gmail.com <br />
          15 rue du meuble, Tunis 2015 <br />
          +216 25 26 27 26
        </p>
        <div className={classes.socialIcons}></div>
      </div>
      <div className={classes.midleContainer}>
        <List className={classes.about}>
          <List.Item className={classes.footerItemTitle}>About</List.Item>
          <List.Item className={classes.footerItem}>
            <Link href="/inspiration"> Inspiration </Link>
          </List.Item>
          <List.Item className={classes.footerItem}>
            {' '}
            <Link href="/magazine">Magazine</Link>{' '}
          </List.Item>
          <List.Item className={classes.footerItem}>
            {' '}
            <Link href="/store">Store</Link>{' '}
          </List.Item>
        </List>

        <List className={classes.company}>
          <List.Item className={classes.footerItemTitle}>Company</List.Item>
          <List.Item className={classes.footerItem}>
            <Link href="/solution"> Solution</Link>
          </List.Item>
          <List.Item className={classes.footerItem}>
            {' '}
            <Link href="/#"> Contact Us </Link>{' '}
          </List.Item>
          <List.Item className={classes.footerItem}>
            {' '}
            <Link href="/#">FAQ</Link>{' '}
          </List.Item>
        </List>

        <List className={classes.support}>
          <List.Item className={classes.footerItemTitle}> Support</List.Item>
          <List.Item className={classes.footerItem}>
            {' '}
            <Link href="/#">Account</Link>
          </List.Item>
          <List.Item className={classes.footerItem}>
            <Link href="/#">Terms & conditions</Link>
          </List.Item>
          <List.Item className={classes.footerItem}>
            {' '}
            <Link href="/#">Privacy policy</Link>
          </List.Item>
        </List>
      </div>
      <div className={classes.rightContainer}>
        <List className={classes.input}>
          <List.Item className={classes.footerItemTitle}>
            Subscribe Now
          </List.Item>
          <List.Item className={classes.RightFooterItem}>
            <Input
              className={classes.newsletter}
              size="small"
              placeholder="Your Email"
              prefix={<FeatherIcon className="text-green" icon={'mail'} />}
            />
          </List.Item>
        </List>
        <List className={classes.btnContainer}>
          <List.Item>
            <PrimaryBtn
              style={`${classes.btnStyle}`}
              showArrow={false}
              linkTo="#"
            >
              <FeatherIcon
                className="text-white"
                icon="arrow-right"
                style={{ color: '#fff' }}
              />
            </PrimaryBtn>
          </List.Item>
        </List>
      </div>
    </Footer>
  )
}

export default FooterComponent
