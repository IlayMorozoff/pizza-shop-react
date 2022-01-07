import axios from 'axios';
import { IPizzaData } from '../utils/interfaces';

class PizzaService {
  private baseUrl = 'http://localhost:3000';

  async getAll(): Promise<IPizzaData[]> {
    const response = await axios.get<IPizzaData[]>(`${this.baseUrl}/pizzas`);
    const pizzas = response.data;
    return pizzas;
  }

  async sortAndSetCategory(category: number, sortBy: string): Promise<IPizzaData[]> {
    const response = await axios.get<IPizzaData[]>(
      `${this.baseUrl}/pizzas?${
        category === 0 ? '' : `category=${category}`
      }&_sort=${sortBy}&_order=asc`,
    );
    const pizzas = response.data;
    return pizzas;
  }
}

export default new PizzaService();
