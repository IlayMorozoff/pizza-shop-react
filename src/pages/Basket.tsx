import { FC } from 'react';
import BasketContainer from '../components/BasketContainer';
import HeaderBasket from '../components/HeaderBasket';
import Logo from '../components/Logo';
import Contrainer from '../components/styles/Container';
import StyledBasketContainer from '../components/styles/StyledBasketContainer';
import StyledDivider from '../components/styles/StyledDivider';
import StyledFlex from '../components/styles/StyledFlex';

const Basket: FC = () => {
  return (
    <Contrainer>
      <StyledFlex margin="0 0 40px 0">
        <Logo />
      </StyledFlex>
      <StyledDivider />
      <StyledBasketContainer>
        <HeaderBasket />
        <BasketContainer />
      </StyledBasketContainer>
    </Contrainer>
  );
};

export default Basket;
