import { IPizzaBasket } from './interfaces';

function checkBasketItem(pizza: IPizzaBasket, payload: IPizzaBasket): boolean {
  return (
    pizza.size === payload.size &&
    pizza.type === payload.type &&
    pizza.imageUrl === payload.imageUrl &&
    pizza.name === payload.name &&
    pizza.price === payload.price
  );
}

export default checkBasketItem;
