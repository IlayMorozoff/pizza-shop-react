import axios from 'axios';
import { IPizzaData } from '../utils/interfaces';

class PizzaService {
  baseUrl = 'http://localhost:3000';

  async getAll(): Promise<IPizzaData[]> {
    const response = await axios.get<IPizzaData[]>(`${this.baseUrl}/pizzas`);
    const pizzas = response.data;
    return pizzas;
  }
}

export default new PizzaService();
