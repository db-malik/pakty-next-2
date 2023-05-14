import React, { useEffect, useState } from 'react'

import { FcGoogle } from 'react-icons/fc'
// import { GoogleLogin } from '@react-oauth/google'

import { AiFillEyeInvisible } from 'react-icons/ai'

// import jwt_decode from 'jwt-decode'
// import { useGoogleLogin } from '@react-oauth/google'
// import axios from 'axios'

import classes from './signUp.module.scss'
import Logo from '@/components/fragments/header/logo/Logo'
import Image from 'next/image'
import Link from 'next/link'
import SubmitButton from '@/components/buttons/submitButton/SubmitButton'
import { useRouter } from 'next/router'
import useRegister from '@/hooks/useRegister'

const SignUpPage = () => {
  const router = useRouter()

  const [user, setUser] = useState(null)
  const { error, register } = useRegister()
  const [passwordType, setPasswordType] = useState('password')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    register(formData.fullName, formData.email, formData.password)
  }

  // const loginGoogle = useGoogleLogin({
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

  const showHidePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }
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
          <div class={classes.name}>
            <input className={classes.inputField} placeholder="Full name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
          </div>
          <div class={classes.email}>
            <input className={classes.inputField} placeholder="Email address" type="text" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div class={classes.password}>
            <input
              className={`${classes.inputField} ${classes.password}`}
              placeholder="Password"
              type={passwordType}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <AiFillEyeInvisible onClick={showHidePassword} className={classes.iconShow} />
          </div>
          <div class={classes.password}>
            <input
              className={`${classes.inputField} ${classes.password}`}
              placeholder="Confirm password"
              type={passwordType}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className={classes.checkboxContainer}>
            <div className={classes.checkboxRememberMe}>
              <input id="rememberMe" type="checkbox" />
              <label for="rememberMe">Remember me</label>
            </div>
            <Link href="/reset-password" className={classes.forgotPassword}>
              Forgot Password
            </Link>
          </div>

          <div class={classes.submit}>
            <SubmitButton onClick={handleSubmit} style={`${classes.btnStyle}`} showArrow={false}>
              SIGN IN
            </SubmitButton>
          </div>

          <div className={classes.actionContainer}>
            <span className={classes.noAccount}> Don’t have an account?</span>
            <Link href="/sign-up" className={classes.links}>
              Sign up for free
            </Link>
          </div>
          <div className={classes.google}>
            <span>Or</span>
            <div class={classes.googleBtn}>
              <FcGoogle /> <span>Log in with Google</span>
            </div>
          </div>
        </div>
      </div>
      <div class={classes.rightContainer}>
        <Image src="/assets/img/img_signup.png" fill />
      </div>
    </div>
  )
}
export default SignUpPage
