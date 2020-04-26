import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { onSubmit } = props;
  const [searchText, setSearch] = useState('');
  const typeingRef = useRef(null);

  const handleChange = e => {
    const searchText = e.target.value;
    setSearch(searchText);
    if (typeof onSubmit !== 'function') return;
    if (typeingRef.current) {
      clearTimeout(typeingRef.current);
    }
    typeingRef.current = setTimeout(() => {
      const obj = {
        searchText,
      }
      onSubmit(obj);
    }, 300);
  }

  return (
    <form>
      <input type="text" value={searchText} onChange={handleChange} />
    </form>
  );
}

export default Search;

Search.propTypes = {
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: null,
}