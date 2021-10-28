import Section from './components/Section/index';
import Feedback from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/';
import Notification from './components/Notification/';
import styles from './components/Section/Section.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Section title="Please leave feedback"></Section>
      <Feedback />
      <Statistics />
      <Notification />
    </div>
  );
}

export default App;
