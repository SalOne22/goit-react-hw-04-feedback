import PropTypes from 'prop-types';

import { Text } from 'components/styled/Text';
import { List } from './Statistics.styled';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => (
  <List>
    <li>
      <Text>Good: {good}</Text>
    </li>
    <li>
      <Text>Neutral: {neutral}</Text>
    </li>
    <li>
      <Text>Bad: {bad}</Text>
    </li>
    <li>
      <Text>Total: {total}</Text>
    </li>
    <li>
      <Text>Positive feedback: {positivePercentage}%</Text>
    </li>
  </List>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
