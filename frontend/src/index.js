import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot from react-dom/client
import { Provider } from 'react-redux';
import App from './App'; // Path to your App component
import store from './redux/store'; // Path to your Redux store
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'; // Import the CSS file

// Get the root container
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);