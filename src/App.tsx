import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Basket from './pages/Basket';
import Main from './pages/Main';
import './styles.scss';

export const App: FC = () => {
  return (
    <Switch>
      <Route component={Main} path="/" exact />
      <Route component={Basket} path="/basket" exact />
    </Switch>
  );
};

export default App;
