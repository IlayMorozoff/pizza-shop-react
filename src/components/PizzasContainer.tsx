import { FC, useEffect } from 'react';
import { fetchPizzas } from '../store/reducers/pizzasSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks/redux';
import PizzaCard from './PizzaCard';
import Spiner from './Spiner';
import StyledGridContainer from './styles/StyledGridContainer';
import StyledText from './styles/StyledText';

const PizzasContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { error, items, isLoading } = useAppSelector((state) => state.pizzasReducer);
  const { category, sortBy } = useAppSelector((state) => state.filtersReducer);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <>
      <StyledText textColor="#000000" fontSize="32px" padding="32px 0 35px 0">
        Все пиццы
      </StyledText>
      <StyledGridContainer>
        {items.length !== 0 &&
          items
            .filter((pizza) => {
              if (category === 0) {
                return pizza;
              }
              return pizza.category === category;
            })
            .sort((a, b) => {
              if (sortBy === 'price') {
                return a.price - b.price;
              }
              if (sortBy === 'popular') {
                return a.rating - b.rating;
              }
              return a.name.localeCompare(b.name);
            })
            .map((pizza) => <PizzaCard key={pizza.id} {...pizza} />)}
        {isLoading && <Spiner />}
        {error && <StyledText>{error}</StyledText>}
      </StyledGridContainer>
    </>
  );
};

export default PizzasContainer;
