import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../utils/hooks/redux';
import BasketItem from './BasketItem';
import { StyledBtnBasket } from './styles/StyledBasketButton';
import StyledFlex from './styles/StyledFlex';
import StyledText from './styles/StyledText';

const Count = styled.span<{ $isCount?: boolean }>`
  font-size: 24px;
  font-weight: 700;
  color: ${({ $isCount }) => ($isCount ? '#000' : '#fe5f1e')};
`;

const BasketContainer: FC = () => {
  const { basketItems, itemsCount, totalPrice } = useAppSelector((state) => state.basketReducer);

  return (
    <>
      {basketItems.length !== 0 &&
        basketItems.map((addedPizza) => <BasketItem key={uuidv4()} {...addedPizza} />)}
      <StyledFlex justify="space-between" align="center" margin="40px 0 0 0">
        <StyledText fontSize="24px" textColor="#000" fontWeight="400">
          Всего пицц: <Count $isCount>{itemsCount} шт.</Count>
        </StyledText>
        <StyledText fontSize="24px" textColor="#000" fontWeight="400">
          Сумма заказа: <Count>{totalPrice} ₽</Count>
        </StyledText>
      </StyledFlex>
      <StyledFlex justify="space-between" align="center" margin="40px 0 0">
        <Link to="/" style={{ display: 'block', width: '25%' }}>
          <StyledBtnBasket>Вернуться назад</StyledBtnBasket>
        </Link>
        <StyledBtnBasket $isPayButton>Оплатить сейчас</StyledBtnBasket>
      </StyledFlex>
    </>
  );
};

export default BasketContainer;
