import styled from 'styled-components';

import theme from 'components/styled/theme';

export const Wrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 16px;
`;

Title.defaultProps = {
  theme,
};
