import { FC, useEffect, useState } from 'react';
import pizzaService from '../services/pizzaService';
import { fetchPizzas } from '../store/reducers/pizzasSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks/redux';
import { IPizzaData } from '../utils/interfaces';
import PizzaCard from './PizzaCard';
import Spiner from './Spiner';
import StyledFlex from './styles/StyledFlex';
import StyledText from './styles/StyledText';

const PizzasContainer: FC = () => {
  // const [pizzas, setPizzas] = useState<IPizzaData[]>([]);
  const dispatch = useAppDispatch();
  const { error, items, isLoading } = useAppSelector((state) => state.pizzasReducer);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <>
      <StyledText textColor="#000000" fontSize="32px" padding="32px 0 0 0">
        Все пиццы
      </StyledText>
      <StyledFlex gap="0 48px">
        {items.length &&
          items.map((pizza) => {
            return <PizzaCard key={pizza.id} {...pizza} />;
          })}
        {isLoading && <Spiner />}
        {error && <StyledText>{error}</StyledText>}
      </StyledFlex>
    </>
  );
};

export default PizzasContainer;
