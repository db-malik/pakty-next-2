import React from 'react'
import { Button, Col, Form, Input, Radio, Row } from 'antd'

import Slider from '../../components/fragments/comonFragment/slider/Slider'
import classes from './BecomeProPage.module.scss'
const { TextArea } = Input

const BecomeProPage = () => {
  return (
    <>
      <Slider
        widthContent="700px"
        type="becomePro"
        image="/assets/img/become_pro.png"
        title="Become a professional"
        content="If you have a project or products and you want to be professional , we can help you.
    Just send us your request ! "
      />
      <div className={`${classes.container}   lineairBackground`}>
        <p className={classes.desc}>
          Pakty team can help you , Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vitae risus, lorem amet aliquam libero mauris magna
          ac.{' '}
        </p>
        <Form>
          <Form.Item>
            <Input placeholder="Company name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Fiscal number" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Phone number" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Company Address" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email address" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Your first and last name" />
          </Form.Item>
          <Row>
            <Col span={24}>
              <Form.Item>
                <Radio>Is your brand registered?</Radio>
              </Form.Item>
            </Col>
            <Col span={24}>
              You must register your trademark, is not too difficult to do Lorem
              ipsum dolor sit amet
            </Col>
          </Row>
          <Form.Item>
            <TextArea placeholder="Message" rows={15} />
          </Form.Item>
          <Button block className="pakty-btn-primary">
            {' '}
            SEND REQUEST
          </Button>
        </Form>
      </div>
    </>
  )
}

export default BecomeProPage
