import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';

const rootRef = document.getElementById('root');

const root = ReactDOM.createRoot(rootRef);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
