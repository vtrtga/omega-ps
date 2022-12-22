import React from 'react';
import PropTypes from 'prop-types';

function InfoCard({
  cases, datetime, deaths, refuses, state, suspects,
}) {
  return (
    <div className="info-card">
      <p>
        Estado:
        {' '}
        {`${state}`}
      </p>
      <p>
        Suspeitos:
        {' '}
        {`${suspects}`}
      </p>
      <p>
        Casos:
        {`${cases}`}
      </p>
      <p>
        Ultima atualização:
        {' '}
        {`${datetime}`}
      </p>
      <p>
        Mortes:
        {' '}
        {`${deaths}`}
      </p>
      <p>
        Negativos:
        {' '}
        {`${refuses}`}
      </p>
    </div>
  );
}

export default InfoCard;

InfoCard.propTypes = {
  datetime: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
  refuses: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  suspects: PropTypes.number.isRequired,
};
