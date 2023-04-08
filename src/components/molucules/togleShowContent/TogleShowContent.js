import React, { useState } from 'react'
import classes from './TogleShowContent.module.css'

// arrayLinks and  content must follow this shape

// const arrayLinks = ['description ', 'information']
// const content = {
//   description: 'text',
//   information: 'text',
// }

const TogleShowContent = ({ arrayLinks, content }) => {
  const [inerText, setInerText] = useState(arrayLinks[0])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (link, index) => {
    setInerText(link)
    setActiveIndex(index)
  }
  console.log(activeIndex)
  return (
    <div className={classes.container}>
      <ul className={classes.navlinks}>
        {arrayLinks.map((link, index) => (
          <li
            key={index}
            onClick={() => handleClick(link, index)}
            className={`${activeIndex === index ? classes.active : ''}  ${
              classes.listItem
            }`}
          >
            {link}
          </li>
        ))}
      </ul>
      <div className={classes.content}>{content[inerText]}</div>
    </div>
  )
}

export default TogleShowContent
