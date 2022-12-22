import React from 'react';
import PropTypes from 'prop-types';

function InfoCard({
  cases, datetime, deaths, refuses, state, suspects, mainText,
}) {
  return (
    <div className="info-card">
      {
        mainText ? <h2>{mainText}</h2> : null
      }
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
        {`${new Date(datetime)}`}
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
  mainText: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
  refuses: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  suspects: PropTypes.number.isRequired,
};

// InfoCard.defaultProps = {
//   mainText: '',
// };
