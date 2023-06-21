import { Component } from 'react';
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

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = id => {
    this.setState(prev => {
      return {
        [id]: prev[id] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    // Returns NaN if there are no votes.
    // Which is probably okay because we don't see it until there are no votes.
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </ThemeProvider>
    );
  }
}
