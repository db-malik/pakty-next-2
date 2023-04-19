import Link from 'next/link'
import React from 'react'
import { Input } from 'antd'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'

import classes from './ResetPasswordForm.module.css'

const ResetPasswordForm = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h1 className={classes.title}>Have you forgotten your password ?</h1>
        <div className={classes.description}>
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail
        </div>
      </div>
      <form className={classes.form}>
        <input
          className={classes.inputField}
          placeholder="Email address"
          type="text"
          name="email"
          value=""
        />

        <PrimaryBtn>RESET PASSWORD</PrimaryBtn>
        <div className={classes.bottum}>
          <div className={classes.actionContainer}>
            <span>Back to </span>
            <Link href="/login" className={classes.links}>
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResetPasswordForm
