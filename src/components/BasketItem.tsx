import { FC } from 'react';
import styled from 'styled-components';
import { deleteFromBasket, minusItem, plusItem } from '../store/reducers/basketSlice';
import { useAppDispatch } from '../utils/hooks/redux';
import { IPizzaBasket } from '../utils/interfaces';
import BasketButtonCircle from './styles/BasketButtonCircle';
import StyledDivider from './styles/StyledDivider';
import StyledFlex from './styles/StyledFlex';
import StyledText from './styles/StyledText';

const StyledWrapper = styled.div`
  max-width: 130px;
`;

const StyledFlexWithWidth = styled(StyledFlex)`
  width: 110px;
`;

const BasketItem: FC<IPizzaBasket> = ({
  imageUrl,
  name,
  price,
  type,
  size,
  counter,
  totalPriceItem,
}) => {
  const dispatch = useAppDispatch();

  const pizza = {
    imageUrl,
    name,
    price,
    type,
    size,
    counter,
    totalPriceItem,
  };

  const onDeleteAddedPizza = () => {
    dispatch(deleteFromBasket(pizza));
  };

  const onPlus = () => {
    dispatch(plusItem(pizza));
  };

  const onMinus = () => {
    dispatch(minusItem(pizza));
  };

  return (
    <>
      <StyledDivider />
      <StyledFlex justify="space-between" align="center" margin="30px 0 30px">
        <StyledFlex>
          <img src={imageUrl} alt={name} width={80} height={80} />
          <StyledFlex direction="column" justify="center" margin="0 0 0 15px">
            <StyledWrapper>
              <StyledText textColor="#000" fontSize="20px">
                {name}
              </StyledText>
            </StyledWrapper>
            <StyledWrapper>
              <StyledFlex margin="3px 0 0 0">
                <StyledText textColor="#8d8d8d" fontWeight="400" fontSize="14px">
                  {type} тесто,
                </StyledText>
                <StyledText textColor="#8d8d8d" fontWeight="400" fontSize="14px">
                  {size} см.
                </StyledText>
              </StyledFlex>
            </StyledWrapper>
          </StyledFlex>
        </StyledFlex>
        <StyledFlexWithWidth justify="space-between">
          <BasketButtonCircle $isCount type="button" onClick={onMinus}>
            -
          </BasketButtonCircle>
          <StyledText textColor="#000" fontSize="26px">
            {counter}
          </StyledText>
          <BasketButtonCircle $isCount type="button" onClick={onPlus}>
            +
          </BasketButtonCircle>
        </StyledFlexWithWidth>
        <StyledText textColor="#000" fontSize="26px">
          {totalPriceItem} ₽
        </StyledText>
        <BasketButtonCircle type="button" onClick={onDeleteAddedPizza}>
          x
        </BasketButtonCircle>
      </StyledFlex>
    </>
  );
};

export default BasketItem;
