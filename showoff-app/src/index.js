import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import rootReducer from './reducers';
import './index.css';
import theme from './theme';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

