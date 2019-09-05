import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import AuthOProvider from './AuthOProvider';

render(
  <AuthOProvider
    domain='dev-de-cruz.auth0.com'
    client_id='iQ20ICArUtJbBWqM6ZVgJAz9smpB4KP0'
    redirect_uri='http://localhost:7890/'
  >
    <App />
  </AuthOProvider>,
  document.getElementById('root')
);
