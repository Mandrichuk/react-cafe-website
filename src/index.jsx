import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ScrollToTop from './common/ScrollToTop';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import logginsReducer from './features/loggins';
import cartsReducer from "./features/carts"
import loadingReducer from "./features/loading";


const store = configureStore({
  reducer: {
    loggins: logginsReducer,
    carts: cartsReducer,
    loading: loadingReducer,
  },
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>
);
