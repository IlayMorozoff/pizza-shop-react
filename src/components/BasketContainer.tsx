import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../utils/hooks/redux';
import BasketItem from './BasketItem';
import StyledBasketButton from './styles/StyledBasketButton';

const BasketContainer: FC = () => {
  const { basketItems, itemsCount, totalPrice } = useAppSelector((state) => state.basketReducer);

  return (
    <div>
      {basketItems.length !== 0 &&
        basketItems.map((addedPizza) => <BasketItem key={uuidv4()} {...addedPizza} />)}
      <div>Всего пицц: {itemsCount} шт.</div>
      <div>Сумма заказа {totalPrice} шт.</div>
      <StyledBasketButton borderRadius="30px">Оплатить сейчас</StyledBasketButton>
    </div>
  );
};

export default BasketContainer;
