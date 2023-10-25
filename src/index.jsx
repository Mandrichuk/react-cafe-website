import {BrowserRouter as Router} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import App from './CreateApp.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);