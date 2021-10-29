import React, { Component } from 'react';
import Section from './components/Section/index';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/';
import Notification from './components/Notification/';
import styles from './components/Section/Section.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <div className={styles.app}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              onLeaveFeedback={this.addFeedback}
            ></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            ) : (
              <Notification message="No feedback"></Notification>
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className={styles.app}>
//       <Section title="Please leave feedback"></Section>
//       <Feedback />
//       <Statistics />
//       <Notification />
//     </div>
//   );
// }

// class Counter extends Component {
// 	state = {
// 	  good: 0,
// 	  neutral: 0,
// 	  bad: 0,
// 	};
// onLeaveFeedback = () => {
//     this.setState({ good: 1 });
//   };

//   render() {
