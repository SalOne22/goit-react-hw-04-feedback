import { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import theme from './styled/theme';

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

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics"></Section>
      </ThemeProvider>
    );
  }
}
