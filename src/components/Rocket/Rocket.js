import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({
  id, description,
}) => (
  <div key={id}>
    <div>{description}</div>
  </div>
);
Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
