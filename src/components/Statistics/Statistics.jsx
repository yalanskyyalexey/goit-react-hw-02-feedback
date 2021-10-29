import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>Good: {good}</span>
      <span className={styles.span}>Neutral: {neutral}</span>
      <span className={styles.span}>Bad: {bad}</span>
      <span className={styles.span}>Total: {total}</span>
      <span className={styles.span}>
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
