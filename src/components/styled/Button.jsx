import styled from 'styled-components';
import theme from './theme';

export const Button = styled.button`
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;

  background-color: ${props => props.theme.colors.white};

  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 5px;

  box-shadow: 0 1px 2px ${props => props.theme.colors.shadow};

  cursor: pointer;

  transition: color 150ms ease, background-color 200ms ease;

  &:hover,
  &:focus-visible {
    background-color: ${props => props.theme.colors.brand};
    color: ${props => props.theme.colors.white};
  }

  &:active {
    background-color: ${props => props.theme.colors.brandAlt};
  }
`;

Button.defaultProps = {
  theme,
};
