import React from 'react';
import PropTypes from 'prop-types';

function Farts({ farts }) {
  const fartList = farts.map((fart, i) => (
    <li key={i}>
      <h5>{fart}</h5>
    </li>
  ));
  return (
    <ul>
      {fartList}
    </ul>
  );
}

Farts.propTypes = {
  farts: PropTypes.array.isRequired
};

export default Farts;
