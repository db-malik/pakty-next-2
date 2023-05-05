import Link from 'next/link'
import React from 'react'
import { Input } from 'antd'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import classes from './LoginForm.module.scss'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'

const LoginForm = () => {
  return (
    <div className={classes.container}>
      <div class={classes.email}>
        <input className={classes.inputField} placeholder="Email address" type="text" name="email" value="" />
      </div>
      <div class={classes.password}>
        <input className={classes.inputField} placeholder="Password" type="password" name="" value="" />

        <AiFillEyeInvisible className={classes.iconShow} />
      </div>
      <div class={classes.forgotPassword}>
        <div className={classes.checkboxContainer}>
          <div className={classes.checkbox}>
            <input id="rememberMe" type="checkbox" />
            <label for="rememberMe">Remember me</label>
          </div>
          <Link href="/reset-password" className={classes.links}>
            Forgot Password
          </Link>
        </div>
      </div>
      <div class={classes.submit}>
        <PrimaryBtn>LOG IN</PrimaryBtn>
      </div>
      <div class={classes.link}>
        <div className={classes.actionContainer}>
          <span> Don’t have an account?</span>
          <Link href="/sign-up" className={classes.links}>
            Sign up for free
          </Link>
        </div>
      </div>
      <div class={classes.or_br}>Or</div>
      <div class={classes.google}>
        <FcGoogle /> <span>Log in with Google</span>
      </div>
    </div>
  )
}

export default LoginForm
