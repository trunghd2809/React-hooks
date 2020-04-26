import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToDoForm = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit !== 'function') return;
    const obj = {
      title: value,
    }
    onSubmit(obj);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
}

export default ToDoForm;

ToDoForm.propTypes = {
  onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
  onSubmit: null,
}