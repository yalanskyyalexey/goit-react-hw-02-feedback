import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

class Counter extends Component {}

const FeedbackOptions = ({ onLeaveFeedback }) => {
	return (
		<div>
			<button
				type='button'
				name='good'
				onClick={onLeaveFeedback}
				className={styles.good}
			>
				Good
			</button>
			<button
				type='button'
				name='neutral'
				onClick={onLeaveFeedback}
				className={styles.neutral}
			>
				Neutral
			</button>
			<button
				type='button'
				name='bad'
				onClick={onLeaveFeedback}
				className={styles.bad}
			>
				Bad
			</button>
		</div>
	);
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
	onLeaveFeedback: PropTypes.func.isRequired,
};
