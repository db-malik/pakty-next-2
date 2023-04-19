import Image from 'next/image'
import React from 'react'
import classes from './DownloadPaktyApp.module.css'
const DownloadPaktyApp = () => {
  return (
    <div className={`${classes['get-mobile-app']}`}>
      <div className={classes['get-mobile-app-section']}>
        <span className={classes['get-mobile-app-title']}>
          Download Pakty app
        </span>
        <p className={classes['get-mobile-app-description']}>
          Start decorating your dream with Packty. Originate and Inspire what
          you want just with one click. Once you discover your style, what
          happens next? Start the Packty application and see your results
          brought to life in your accurate room.
        </p>
        <div className={classes['buttons-box']}>
          <div className={classes.imageContainer}>
            <Image
              type="submit"
              src="/assets/img/Google_Play_Store_badge.jpg"
              alt=""
              fill
            />
          </div>
          <div className={classes.imageContainer}>
            <Image type="submit" src="/assets/img/app_store.png" alt="" fill />
          </div>
        </div>
      </div>
      <div className={classes.phoneImageContainer}>
        <Image
          src="/assets/img/get-app-img.png"
          alt=""
          className="img-fluid"
          fill
        />
      </div>{' '}
    </div>
  )
}

export default DownloadPaktyApp
