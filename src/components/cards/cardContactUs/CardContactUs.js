import React from 'react'
import { Button, Form, Input } from 'antd'

import classes from './CardContactUs.module.css'
import Image from 'next/image'

const { TextArea } = Input
const CardContactUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src="/assets/img/contact_img.jpg" fill alt="image" />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.top}>
          <span className={classes.title}>Contact us</span>
          <span className={classes.desc}>Pakty team can help you</span>
        </div>
        <Form>
          <Form.Item>
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email address" />
          </Form.Item>
          <Form.Item>
            <TextArea placeholder="Message" rows={10} />
          </Form.Item>
          <Button block className="pakty-btn-primary">
            CONTACT US
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CardContactUs
