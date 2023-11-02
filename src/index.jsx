import {BrowserRouter as Router} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App.jsx';
import logginsReducer from "./features/loggins.js";


const store = configureStore({
  reducer: {
    loggins: logginsReducer,
  }
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);