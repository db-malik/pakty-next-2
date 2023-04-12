import Image from 'next/image'
import React from 'react'
import classes from '../styles/style.module.css'

import { articles } from '/data/articleData'

const LoginPage = () => {
  return
  ;<div>
    <section className="vh-100">
      <div className="  h-100">
        <div className="row d-flex h-100">
          <div className="col-md-12  pt-4 col-lg-5 col-xl-5 col-sm-12 col-12 offset-xl-1">
            <div className="container text-center">
              <Link to="/">
                <img
                  className="d-flex pb-5"
                  alt="logo"
                  preview={false}
                  src={require('../../assets/img/logo.png')}
                />
              </Link>

              <div className="mb-2 mt-5 mt-lg-5 mb-lg-4 mb-5">
                <h3 className="welcome welcome-back d-flex">Welcome back</h3>
                <p className="para-welcome pb-2  d-flex">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <form>
                <div className="form-outline mb-3">
                  <Input
                    type="email"
                    id="form1Example13"
                    className="form-control  input-signIn"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-outline mb-3">
                  <div className="input-group input-group-password ">
                    <input
                      type="password"
                      id="form1Example23"
                      className="form-control input-password execption-form"
                      placeholder="password"
                    />
                    <span
                      className="input-group-text icon-visibility"
                      id="basic-addon1"
                    >
                      <AiFillEyeInvisible className="icon-show" />
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-between  mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" for="form1Example3">
                      {' '}
                      Remember me{' '}
                    </label>
                  </div>
                  <Link
                    to="/resetPassword"
                    className="forgot-password me-5 me-md-0 me-sm-0 me-xs-0"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-5 mt-lg-4  button-login"
                >
                  Sign in
                </button>
                <p className="new-account pt-3">
                  {' '}
                  Don't have an account?{' '}
                  <Link to="/signup" className="sign-for-free">
                    {' '}
                    Sign up for free{' '}
                  </Link>{' '}
                </p>
                <div className="divider d-flex align-items-center mt-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">or</p>
                </div>
                <div
                  onClick={login}
                  className=" login-google btn mt-4 d-flex  btn-lg btn-block"
                  role="button"
                >
                  <FcGoogle /> Log in with Google
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12  col-12 bloc-img">
            <Image
              className="img-fluid "
              alt="img"
              preview={false}
              src="/assets/img/img-login.png"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default LoginPage
