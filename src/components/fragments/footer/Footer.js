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
    <Footer
      style={{
        display:
          router.pathname === '/login' ||
          router.pathname === '/signup' ||
          router.pathname === '/resetPassword' ||
          router.pathname === '/user/customizedesign' ||
          router.pathname === '/speener'
            ? 'none'
            : 'block',
      }}
      className={classes['custom-footer']}
    >
      <Row align={'middle'}>
        <Col xs={12} sm={8} lg={6}>
          <Image src={logo} alt="logo" width="112" />
          <p>
            pakty@gmail.com <br />
            15 rue du meuble, Tunis 2015 <br />
            +216 25 26 27 26
          </p>
          <Row>
            <Col span={8}></Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <List>
            <List.Item
              className={`${classes['footer-item']} ${classes['footer-item-title']}`}
            >
              About
            </List.Item>
            <List.Item className={classes['footer-item']}>
              Inspiration
            </List.Item>
            <List.Item className={classes['footer-item']}>Magazine</List.Item>
            <List.Item className={classes['footer-item']}>Store</List.Item>
          </List>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <List>
            <List.Item
              className={`${classes['footer-item']} ${classes['footer-item-title']}`}
            >
              Company
            </List.Item>
            <List.Item className={classes['footer-item']}>Solution</List.Item>
            <List.Item className={classes['footer-item']}>Contact Us</List.Item>
            <List.Item className={classes['footer-item']}>FAQ</List.Item>
          </List>
        </Col>
        <Col xs={12} sm={8} md={6} lg={4}>
          <List>
            <List.Item
              className={`${classes['footer-item']} ${classes['footer-item-title']}`}
            >
              Support
            </List.Item>
            <List.Item className={classes['footer-item']}>Account</List.Item>
            <List.Item className={classes['footer-item']}>
              Terms & conditions
            </List.Item>
            <List.Item className={classes['footer-item']}>
              Privacy policy
            </List.Item>
          </List>
        </Col>
        <Col sm={12} md={8} lg={6}>
          <List>
            <List.Item
              className={`${classes['footer-item']} ${classes['footer-item-title']}`}
            >
              Subscribe Now
            </List.Item>
            <List.Item className={classes['footer-item']}>
              <Row gutter={10} align={'middle'}>
                <Col span={18}>
                  <Input
                    className="newsletter"
                    size="small"
                    placeholder="Your Email"
                    prefix={
                      <FeatherIcon className="text-green" icon={'mail'} />
                    }
                  />
                </Col>
                <Col span={6}>
                  <Button className="pakty-btn-primary">
                    <FeatherIcon className="text-white" icon="arrow-right" />
                  </Button>
                </Col>
              </Row>
            </List.Item>
          </List>
        </Col>
      </Row>
    </Footer>
  )
}

export default FooterComponent
