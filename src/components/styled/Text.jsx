import styled from 'styled-components';

import theme from 'components/styled/theme';

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
`;

Text.defaultProps = {
  theme,
};
