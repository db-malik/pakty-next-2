import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './BackButton.module.scss'
import { Button } from '@mui/material'
import { FaArrowLeft } from 'react-icons/fa'

const BackButton = ({ href }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.back()
  }

  return (
    <Button variant="black">
      <a className={classes.arrowBack} href="#" onClick={handleClick}>
        <FaArrowLeft /> Back
      </a>
    </Button>

    // <div className={classes.backButton}>
    //   <a href="#" onClick={handleClick}>
    //     <div className={classes.arrow}></div>
    //     <div className={classes.text}>Back</div>
    //   </a>
    // </div>
  )
}

export default BackButton
