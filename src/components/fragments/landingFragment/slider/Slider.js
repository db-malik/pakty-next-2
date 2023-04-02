import Image from 'next/image'
import SliderContentComponent from './slider-content/Slider-content'
import classes from './Slider.module.css'

const SliderComponent = (props) => {
  const { image, title, content, textColor, action } = props
  return (
    <div className={`${classes['img-container']}`}>
      <div className={`${classes['img-wrapper']}`}>
        <Image alt="img" fill={true} src={image} />
      </div>

      <SliderContentComponent
        title={title}
        content={content}
        textColor={textColor}
        action={action}
      />
    </div>
  )
}

export default SliderComponent
