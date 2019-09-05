import React from 'react';
import { useAuth0 } from '../AuthOProvider';

export default function Farts() {
  const { isAuthenticated, loading, user } = useAuth0();
  return (
    <>
      <h2>Do you smell that?</h2>
      <h3>{ isAuthenticated && !loading ? user.name : 'My Dog'} definitely dealt the fart!</h3>
    </>
  );
}
