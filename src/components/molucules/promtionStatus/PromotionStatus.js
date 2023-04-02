import classes from './PromotionStatus.module.css'

const PromotionStatus = ({ promoPercentage }) => {
  return <span className={classes.promoContainer}>{promoPercentage} qqq</span>
}

export default PromotionStatus
