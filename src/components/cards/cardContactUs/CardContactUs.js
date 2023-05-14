import React, { useEffect, useState } from 'react'
import classes from './CardContactUs.module.scss'
import Image from 'next/image'
import SubmitButton from '@/components/buttons/submitButton/SubmitButton'
import useContactUs from '@/hooks/useContactUs'
import MyModal from '@/components/modal/Modal'

const CardContactUs = () => {
  const { status, sendMessage } = useContactUs()
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    message: '',
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await sendMessage(formData.email, formData.fullName, formData.message)
  }

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  useEffect(() => {
    if (status.length > 0) {
      setOpen(true)
    }
  }, [status])

  const handleClose = () => {
    setOpen(false)
  }
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

        <div className={classes.form}>
          <input
            placeholder="Full name"
            className={`${classes.name} ${classes.inputField}`}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input className={`${classes.email} ${classes.inputField}`} placeholder="Email address" name="email" value={formData.email} onChange={handleChange} />

          <textarea
            className={`${classes.message} ${classes.inputField}`}
            placeholder="Message"
            rows="10"
            cols="50"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className={classes.submit}>
          <SubmitButton onClick={handleSubmit} style={`${classes.btnStyle}`} showArrow={false}>
            SEND
          </SubmitButton>
        </div>
        <MyModal open={open} handleClose={handleClose} title={status} />
      </div>
    </div>
  )
}

export default CardContactUs
