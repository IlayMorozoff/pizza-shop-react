import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.scss';

export const App: FC = () => {
  return (
    <div>HELLO</div>
    // <Switch>
    //   {/* <Route path="/" exact component={Gallery} /> */}
    //   {/* <Route path="*" component={PageNotFound} /> */}
    // </Switch>
  );
};

export default App;
