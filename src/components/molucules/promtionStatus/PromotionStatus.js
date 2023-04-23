import classes from './PromotionStatus.module.css'

const PromotionStatus = ({ promotion }) => {
  return <span className={classes.promoContainer}>{`- %${promotion}`}</span>
}

export default PromotionStatus
