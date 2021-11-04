import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import GlobalStyles from './components/styles/GlobalStyles';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
