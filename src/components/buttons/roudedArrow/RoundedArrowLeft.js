
import { FaArrowLeft } from 'react-icons/fa';
import classes from './RoundedArrow.module.css'
function RoundedArrowLeft({  onClick }) {
  return (
    <button
      className={classes.roundedButton}
      onClick={onClick}
    >
       <FaArrowLeft className={classes.roundedIcon} />
    </button>
  );
}

export default RoundedArrowLeft