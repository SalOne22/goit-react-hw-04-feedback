import PropTypes from 'prop-types';

import { Text } from 'components/styled/Text';

export const Notification = ({ message }) => <Text>{message}</Text>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
