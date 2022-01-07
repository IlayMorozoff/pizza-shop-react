import { FC, useEffect } from 'react';
import { addToBasket } from '../store/reducers/basketSlice';
import { fetchPizzas } from '../store/reducers/pizzasSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks/redux';
import { IPizzaBasket } from '../utils/interfaces';
import PizzaCard from './PizzaCard';
import StyledGridContainer from './styles/StyledGridContainer';
import StyledText from './styles/StyledText';

const PizzasContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { error, items } = useAppSelector((state) => state.pizzasReducer);
  const { category, sortBy } = useAppSelector((state) => state.filtersReducer);

  useEffect(() => {
    dispatch(fetchPizzas({ category, sortBy }));
  }, [category, dispatch, sortBy]);

  const onAddPizzaToBasket = (pizza: IPizzaBasket): void => {
    dispatch(addToBasket(pizza));
  };

  return (
    <>
      <StyledText textColor="#000000" fontSize="32px" padding="32px 0 35px 0">
        Все пиццы
      </StyledText>
      <StyledGridContainer>
        {items.length !== 0 &&
          items.map((pizza) => (
            <PizzaCard key={pizza.id} {...pizza} onClickAddToBasket={onAddPizzaToBasket} />
          ))}
        {error && <StyledText>{error}</StyledText>}
      </StyledGridContainer>
    </>
  );
};

export default PizzasContainer;
