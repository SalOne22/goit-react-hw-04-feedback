import PropTypes from 'prop-types';

import { Button } from 'components/styled/Button';
import { ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonsList>
    {options.map(({ name, id }) => (
      <li key={id}>
        <Button onClick={() => onLeaveFeedback(id)}>{name}</Button>
      </li>
    ))}
  </ButtonsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
