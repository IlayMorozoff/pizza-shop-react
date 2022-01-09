import { FC } from 'react';
import BasketContainer from '../components/BasketContainer';
import EmptyBasket from '../components/EmptyBasket';
import HeaderBasket from '../components/HeaderBasket';
import Logo from '../components/Logo';
import Contrainer from '../components/styles/Container';
import StyledBasketContainer from '../components/styles/StyledBasketContainer';
import StyledDivider from '../components/styles/StyledDivider';
import StyledFlex from '../components/styles/StyledFlex';
import { useAppSelector } from '../utils/hooks/redux';

const Basket: FC = () => {
  const { basketItems } = useAppSelector((state) => state.basketReducer);
  return (
    <Contrainer>
      <StyledFlex margin="0 0 40px 0">
        <Logo />
      </StyledFlex>
      <StyledDivider />
      {basketItems.length === 0 ? (
        <EmptyBasket />
      ) : (
        <StyledBasketContainer>
          <HeaderBasket />
          <BasketContainer />
        </StyledBasketContainer>
      )}
    </Contrainer>
  );
};

export default Basket;
