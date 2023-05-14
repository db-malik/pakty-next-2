import { Button } from 'antd'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Link from 'next/link'
import classes from './SubmitButton.module.css'

const SubmitButton = ({ style, children, showArrow, onClick }) => {
  return (
    <div>
      <Button onClick={onClick} className={`${classes['pakty-btn-primary']} ${style}`}>
        {children}
        {showArrow ? <FeatherIcon className={classes['has-link']} size={20} icon="arrow-right" /> : null}
      </Button>
    </div>
  )
}

export default SubmitButton
