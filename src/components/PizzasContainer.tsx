import { FC, useEffect } from 'react';
import { addToBasket } from '../store/reducers/basketSlice';
import { fetchPizzas } from '../store/reducers/pizzasSlice';
import { useAppDispatch, useAppSelector } from '../utils/hooks/redux';
import { IPizzaBasket } from '../utils/interfaces';
import PizzaCard from './PizzaCard';
import SkeletonLoading from './SkeletonLoading';
import StyledFlex from './styles/StyledFlex';
import StyledGridContainer from './styles/StyledGridContainer';
import StyledText from './styles/StyledText';

const PizzasContainer: FC = () => {
  const dispatch = useAppDispatch();
  const { error, items, isLoading } = useAppSelector((state) => state.pizzasReducer);
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
      <StyledFlex justify="center">
        <StyledGridContainer>
          {items.length !== 0 &&
            items.map((pizza) => (
              <PizzaCard key={pizza.id} {...pizza} onClickAddToBasket={onAddPizzaToBasket} />
            ))}
          {isLoading &&
            Array(12)
              .fill(SkeletonLoading)
              .map((Item, index) => <Item key={`${index + 1}`} />)}
        </StyledGridContainer>
        {error && (
          <StyledFlex justify="center" align="center">
            <StyledText textColor="#000" fontSize="30px" textAlign="center">
              {error}
            </StyledText>
          </StyledFlex>
        )}
      </StyledFlex>
    </>
  );
};

export default PizzasContainer;
