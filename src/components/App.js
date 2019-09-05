import React from 'react';
import { useAuth0 } from '../AuthOProvider';

export default function App() {
  const { isAuthenticated, user, loading, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout();
  return (
    <>
      { !isAuthenticated ? 
        <button onClick={login}>Login</button>
        : <button onClick={logout}>Logout</button>
      }
      <h1>YO</h1>
    </>
  );
}
