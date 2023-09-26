/* eslint-disable prettier/prettier */
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

// eslint-disable-next-line react/prop-types
export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size="small" uppercase>
        <Styled.Container href={link}>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && text}
        </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};
