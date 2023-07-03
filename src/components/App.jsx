import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

import theme from 'theme';

const OPTIONS = [
  {
    name: 'Good',
    id: 'good',
  },
  {
    name: 'Neutral',
    id: 'neutral',
  },
  {
    name: 'Bad',
    id: 'bad',
  },
];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = id => {
    switch (id) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    // Returns NaN if there are no votes.
    // Which is probably okay because we don't see it until there are no votes.
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <ThemeProvider theme={theme}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </ThemeProvider>
  );
};
