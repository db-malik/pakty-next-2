import Link from 'next/link'
import React from 'react'
import { Input } from 'antd'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import classes from './LoginForm.module.css'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'

const LoginForm = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h1 className={classes.title}>Wecome back</h1>
        <div className={classes.description}>
          Welcome back! Please enter your details.
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
        <div className={classes.passwordContainer}>
          <input
            className={classes.inputField}
            placeholder="Password"
            type="password"
            name=""
            value=""
          />

          <AiFillEyeInvisible className={classes.iconShow} />
        </div>
        <div className={classes.checkboxContainer}>
          <div className={classes.checkbox}>
            <input id="rememberMe" type="checkbox" />
            <label for="rememberMe">Remember me</label>
          </div>
          <Link href="/reset-password" className={classes.links}>
            Forgot Password
          </Link>
        </div>
        <PrimaryBtn>LOG IN</PrimaryBtn>
        <div className={classes.bottum}>
          <div className={classes.actionContainer}>
            <span> Don’t have an account?</span>
            <Link href="/sign-up" className={classes.links}>
              Sign up for free
            </Link>
          </div>
          <div>Or</div>
          <div className={classes.loginGoogle}>
            <FcGoogle /> <span>Log in with Google</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
