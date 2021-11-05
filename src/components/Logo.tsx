import { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo, StyledLogoText } from './styles/Logo';
import StyledFlex from './styles/StyledFlex';

const Logo: FC = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <StyledFlex cursor="pointer">
        <StyledLogo />
        <StyledFlex direction="column" margin="0 0 0 15px" cursor="pointer">
          <StyledLogoText fontSize={24} fontWeight={800}>
            REACT PIZZA
          </StyledLogoText>
          <StyledLogoText fontSize={16} fontWeight={400} color="#7b7b7b">
            самая вкусная пицца во вселенной
          </StyledLogoText>
        </StyledFlex>
      </StyledFlex>
    </Link>
  );
};

export default Logo;
