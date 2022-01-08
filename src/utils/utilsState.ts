import { IPizzaBasket } from './interfaces';

export function getItemsCount(items: IPizzaBasket[]): number {
  return items.map((pizza) => pizza.counter).reduce((sum, cur) => sum + cur, 0);
}

export function getTotalPrice(items: IPizzaBasket[]): number {
  return items.map((pizza) => pizza.totalPriceItem).reduce((sum, cur) => sum + cur, 0);
}
