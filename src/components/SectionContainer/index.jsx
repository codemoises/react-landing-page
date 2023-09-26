/* eslint-disable prettier/prettier */
import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';

export const SectionContainer = ({ children, background = false }) => {
  return (
    <Styled.Container background={background}>
      <SectionBackground>{children}</SectionBackground>
    </Styled.Container>
  );
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
