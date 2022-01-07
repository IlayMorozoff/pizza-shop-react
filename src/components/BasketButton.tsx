import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../utils/hooks/redux';
import BasketIcon from './BasketIcon';
import StyledBasketButton from './styles/StyledBasketButton';
import StyledFlex from './styles/StyledFlex';
import StyledText from './styles/StyledText';

const BasketButton: FC = () => {
  const totalCount = useAppSelector((state) => state.basketReducer.itemsCount);
  const totalPrice = useAppSelector((state) => state.basketReducer.totalPrice);
  return (
    <Link to="/basket" style={{ textDecoration: 'none' }}>
      <StyledFlex>
        <StyledBasketButton
          borderRadius="30px 0 0 30px"
          border="1px solid rgba(255, 255, 255, 0.25)"
        >
          <StyledText padding="2px 0 0 10px">{totalPrice} ₽</StyledText>
        </StyledBasketButton>
        <StyledBasketButton borderRadius="0 30px 30px 0">
          <BasketIcon size={20} color="white" />
          <StyledText padding="2px 0 0 10px">{totalCount}</StyledText>
        </StyledBasketButton>
      </StyledFlex>
    </Link>
  );
};

export default BasketButton;
