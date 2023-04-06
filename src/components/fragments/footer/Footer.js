// import React from 'react'

import { Button, Col, Input, Layout, List, Row } from 'antd'
import classes from './Footer.module.css'
import { useLocation } from 'react-router-dom'

import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const logo = require('../../../assets/img/light-logo.png')
import Image from 'next/image'
const { Footer } = Layout

const FooterComponent = () => {
  // const location = useLocation();
  const router = useRouter()
  return (
    <Footer className={classes.footerContainer}>
      <div className={classes.left}>
        <div className={classes.imageContainer}>
          <Image src={logo} alt="logo" fill />
        </div>

        <p>
          pakty@gmail.com <br />
          15 rue du meuble, Tunis 2015 <br />
          +216 25 26 27 26
        </p>
        <div className={classes.socialIcons}></div>
      </div>
      <div className={classes.midle}>
        <List className={classes.about}>
          <List.Item className={classes.footerItemTitle}>About</List.Item>
          <List.Item className={classes.footerItem}>Inspiration</List.Item>
          <List.Item className={classes.footerItem}>Magazine</List.Item>
          <List.Item className={classes.footerItem}>Store</List.Item>
        </List>

        <List className={classes.company}>
          <List.Item className={classes.footerItemTitle}>Company</List.Item>
          <List.Item className={classes.footerItem}>Solution</List.Item>
          <List.Item className={classes.footerItem}>Contact Us</List.Item>
          <List.Item className={classes.footerItem}>FAQ</List.Item>
        </List>

        <List className={classes.support}>
          <List.Item className={classes.footerItemTitle}>Support</List.Item>
          <List.Item className={classes.footerItem}>Account</List.Item>
          <List.Item className={classes.footerItem}>
            Terms & conditions
          </List.Item>
          <List.Item className={classes.footerItem}>Privacy policy</List.Item>
        </List>
      </div>
      <div className={classes.right}>
        <List>
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
            <div className={classes.btnContainer}>
              <Button className="pakty-btn-primary">
                <FeatherIcon
                  className="text-white"
                  icon="arrow-right"
                  style={{ color: '#fff' }}
                />
              </Button>
            </div>
          </List.Item>
        </List>
      </div>
    </Footer>
  )
}

export default FooterComponent
