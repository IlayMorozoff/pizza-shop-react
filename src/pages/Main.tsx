import { FC } from 'react';
import BasketButton from '../components/BasketButton';
import Caregories from '../components/Caregories';
import Logo from '../components/Logo';
import PizzasContainer from '../components/PizzasContainer';
import SortBy from '../components/SortBy';
import Contrainer from '../components/styles/Container';
import StyledFlex from '../components/styles/StyledFlex';

const Main: FC = () => {
  return (
    <Contrainer>
      <StyledFlex justify="space-between">
        <Logo />
        <BasketButton />
      </StyledFlex>
      <StyledFlex margin="60px 0 0 0" justify="space-between">
        <Caregories />
        <SortBy />
      </StyledFlex>
      <PizzasContainer />
    </Contrainer>
  );
};

export default Main;
