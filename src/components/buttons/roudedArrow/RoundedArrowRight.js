

import { FaArrowRight } from 'react-icons/fa';
import classes from './RoundedArrow.module.css'
function RoundedArrowRight({  onClick }) {
  return (
    <button
      className={classes.roundedButton}
      onClick={onClick}
    >
       <FaArrowRight className={classes.roundedIcon} />
    </button>
  );
}

export default RoundedArrowRight;
