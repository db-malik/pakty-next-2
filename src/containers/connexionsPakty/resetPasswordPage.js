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
import ResetPasswordForm from '../../components/forms/resetPasswordForm/ResetPasswordForm'

const ResetPasswordPage = () => {
  return (
    <>
      <CardConnection
        child={<ResetPasswordForm />}
        imageSrc="/assets/img/img-login.png"
      />
    </>
  )
}
export default ResetPasswordPage
