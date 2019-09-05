import React from 'react';
import { useAuth0 } from '../AuthOProvider';

export default function Farts() {
  const { isAuthenticated, loading, user } = useAuth0();
  return (
    <>
      <h3>{ isAuthenticated && !loading ? user.name : 'My Dog'} definitely dealt it!</h3>
    </>
  );
}
