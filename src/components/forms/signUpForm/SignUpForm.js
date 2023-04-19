import Link from 'next/link'
import React from 'react'
import { Input } from 'antd'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

import classes from './SignUpForm.module.css'
import PrimaryBtn from '../../buttons/PrimaryBtn/PrimaryBtn'

const SignUpForm = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h1 className={classes.title}>Sign up to pakty</h1>
        <div className={classes.description}>
          Sign up for free and be a member of pakty community
        </div>
      </div>
      <form className={classes.form}>
        <input
          className={classes.inputField}
          placeholder="Full Name"
          type="text"
          name="name"
          value=""
        />
        <input
          className={classes.inputField}
          placeholder="Email address"
          type="text"
          name="name"
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
        <div className={classes.passwordContainer}>
          <input
            className={classes.inputField}
            placeholder="Confirm password"
            type="password"
            name=""
            value=""
          />

          <AiFillEyeInvisible className={classes.iconShow} />
        </div>

        <PrimaryBtn>SIGN UP</PrimaryBtn>
        <div className={classes.bottum}>
          <div className={classes.actionContainer}>
            <span> You have an account?</span>
            <Link href="/login" className={classes.links}>
              Login
            </Link>
          </div>
          <div>Or</div>
          <div className={classes.loginGoogle}>
            <FcGoogle /> <span>Sign up with Google</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
