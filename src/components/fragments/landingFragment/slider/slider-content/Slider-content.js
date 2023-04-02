import { Button, Col, Row } from 'antd'
import PrimaryBtn from '../../../../buttons/PrimaryBtn/PrimaryBtn'
import classes from './Slider-content.module.css'
const SliderContentComponent = (props) => {
  const { title, content, textColor, action } = props
  return (
    <div className={classes['slider-content']}>
      <div className={`${classes['slider-title']} text-${textColor}`}>
        {title}
      </div>
      <div className={`${classes['slider-text']} text-${textColor}`}>
        <p>{content}</p>
      </div>
      {action ? (
        <div className={classes['slider-action']}>
          <PrimaryBtn>{action}</PrimaryBtn>
        </div>
      ) : null}
    </div>
  )
}

export default SliderContentComponent
