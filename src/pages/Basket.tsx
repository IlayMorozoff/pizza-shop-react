import { FC } from 'react';
import Logo from '../components/Logo';
import Contrainer from '../components/styles/Container';

const Basket: FC = () => {
  return (
    <Contrainer>
      <Logo />
      <div>BASKET</div>
    </Contrainer>
  );
};

export default Basket;
