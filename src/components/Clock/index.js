import React from 'react';
import useClock from '../CustomHooks/useClock';

const Clock = props => {
  const { timeString } = useClock();
  return (
    <div>
      <p>{timeString}</p>
    </div>
  );
};

Clock.propTypes = {};

export default Clock;