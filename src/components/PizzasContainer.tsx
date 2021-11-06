import { FC, useEffect, useState } from 'react';
import pizzaService from '../services/pizzaService';
import { IPizzaData } from '../utils/interfaces';
import PizzaCard from './PizzaCard';
import StyledFlex from './styles/StyledFlex';
import StyledText from './styles/StyledText';

const PizzasContainer: FC = () => {
  const [pizzas, setPizzas] = useState<IPizzaData[]>([]);

  useEffect(() => {
    pizzaService.getAll().then((data) => setPizzas(data));
  }, []);

  return (
    <>
      <StyledText textColor="#000000" fontSize="32px" padding="32px 0 0 0">
        Все пиццы
      </StyledText>
      <StyledFlex gap="0 48px">
        {pizzas.length &&
          pizzas.map((pizza) => {
            return <PizzaCard key={pizza.id} {...pizza} />;
          })}
      </StyledFlex>
    </>
  );
};

export default PizzasContainer;
