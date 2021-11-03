import Button from '../Button/Button';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ btnNames, onLeaveFeedback }) => {
  return (
    <div className="btnWrapper">
      {btnNames.map(btnName => (
        <Button
          key={btnName}
          name={btnName}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  btnNames: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
