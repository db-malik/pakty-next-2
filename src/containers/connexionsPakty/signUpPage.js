import React from 'react'
import './styles/style.module.css'
import { Input } from 'antd'
import { FcGoogle } from 'react-icons/fc'
import { GoogleLogin } from '@react-oauth/google'

import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import CardConnection from '../../components/cards/cardConnection/CardConnection'
import LoginForm from '../../components/forms/loginForm/LoginForm'
import SignUpForm from '../../components/forms/signUpForm/SignUpForm'

const SignUpPage = () => {
  // const login = useGoogleLogin({
  //   onSuccess: async (respose) => {
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
    <>
      <CardConnection
        child={<SignUpForm />}
        imageSrc="/assets/img/img-login.png"
      />
    </>
  )
}
export default SignUpPage
