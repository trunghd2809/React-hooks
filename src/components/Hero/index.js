import React from 'react';
import PropTypes from 'prop-types';

const Hero = props => {
  const { name } = props;
  console.log('render props');
  return (
    <div>
      Hero: {name}
    </div>
  );
};

Hero.propTypes = {
  name: PropTypes.string,
};

Hero.defaultProps = {
  name: '',
};
export default React.memo(Hero);