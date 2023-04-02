import { Button } from 'antd'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import classes from './PrimaryBtn.module.css'

const PrimaryBtn = ({ children, showArrow }) => {
  return (
    <Button className="pakty-btn-primary" size="large" block>
      <div>
        <span> {children}</span>
        <span>
          {showArrow ? (
            <FeatherIcon
              className={classes['has-link']}
              size={20}
              icon="arrow-right"
            />
          ) : null}
        </span>
      </div>
    </Button>
  )
}

export default PrimaryBtn
