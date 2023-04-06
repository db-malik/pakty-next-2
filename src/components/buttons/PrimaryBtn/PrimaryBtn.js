import { Button } from 'antd'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon'
import Link from 'next/link'
import classes from './PrimaryBtn.module.css'

const PrimaryBtn = ({ children, showArrow, linkTo }) => {
  return (
    <div>
      <Link href={linkTo ? linkTo : '#'}>
        <Button className="pakty-btn-primary" size="large" block>
          {children}{' '}
          {showArrow ? (
            <FeatherIcon
              className={classes['has-link']}
              size={20}
              icon="arrow-right"
            />
          ) : null}{' '}
        </Button>
      </Link>
    </div>
  )
}

export default PrimaryBtn
