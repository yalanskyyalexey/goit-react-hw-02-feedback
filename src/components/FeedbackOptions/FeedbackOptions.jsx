import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/Feedback.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        type="button"
        name="good"
        onClick={onLeaveFeedback}
        className={styles.btn}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
        className={styles.btn}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
        className={styles.btn}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
