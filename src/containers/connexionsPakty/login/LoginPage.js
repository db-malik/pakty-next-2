import React from 'react'

import { FcGoogle } from 'react-icons/fc'
// import { GoogleLogin } from '@react-oauth/google'

import { AiFillEyeInvisible } from 'react-icons/ai'

// import jwt_decode from 'jwt-decode'
// import { useGoogleLogin } from '@react-oauth/google'
// import axios from 'axios'

import classes from './Login.module.scss'
import Logo from '@/components/fragments/header/logo/Logo'
import PrimaryBtn from '@/components/buttons/PrimaryBtn/PrimaryBtn'
import Image from 'next/image'
import Link from 'next/link'

const LoginPage = () => {
  // const login = useGoogleLogin({
  //   o./nSuccess: async (respose) => {
  //     try {
  //       const res = await axios.get(
  //         'https://www.googleapis.com/oauth2/v3/userinfo',
  //         {
  //           headers: {
  //             Authorization: `Bearer ${respose.access_token}`,
  //           },
  //         }
  //       )

  //       console.log(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   },
  // })
  return (
    <div class={classes.container}>
      <div class={classes.leftContainer}>
        <div class={classes.logo}>
          <Link href="#">
            <Logo />
          </Link>
        </div>
        <div class={classes.title}>
          <div class={classes.titleSup}>Welcome back </div>
          <div class={classes.titleDesc}>Welcome back! Please enter your details.</div>
        </div>
        <div class={classes.form}>
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
            <PrimaryBtn style={`${classes.btnStyle}`} showArrow={false} linkTo="/user/dashboard">
              LOGIN
            </PrimaryBtn>
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
      </div>
      <div class={classes.rightContainer}>
        <Image src="/assets/img/img-login.png" fill />
      </div>
    </div>
  )
}
export default LoginPage
