import PropTypes from 'prop-types';

import { Container } from 'components/styled/Container';
import { Wrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrapper>
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
