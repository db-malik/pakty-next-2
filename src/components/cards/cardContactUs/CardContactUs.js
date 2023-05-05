import React from 'react'
import { Button, Form, Input } from 'antd'

import classes from './CardContactUs.module.scss'
import Image from 'next/image'
import PrimaryBtn from '@/components/buttons/PrimaryBtn/PrimaryBtn'

const { TextArea } = Input
const CardContactUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src="/assets/img/contact_img.jpg" fill alt="image" />
      </div>

      <div className={classes.formContainer}>
        <div className={classes.top}>
          <div className={classes.title}>Contact us</div>
          <div className={classes.desc}>Pakty team can help you</div>
        </div>

        <Form className={classes.form}>
          <Form.Item>
            <Input placeholder="Full name" className={classes.name} />
          </Form.Item>
          <Form.Item className={classes.email}>
            <Input placeholder="Email address" />
          </Form.Item>
          <Form.Item className={classes.message}>
            <TextArea placeholder="Message" rows={10} />
          </Form.Item>
        </Form>

        <div className={classes.submit}>
          <PrimaryBtn style={`${classes.btnStyle}`} showArrow={false}>
            CONTACT US
          </PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default CardContactUs
