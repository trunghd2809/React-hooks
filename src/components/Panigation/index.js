import React from 'react';
import PropTypes from 'prop-types';

const Panigation = (props) => {
  const { pagination, onPageChange } = props;
  const { _page, _totalRows, _limit } = pagination;

  const handClick = (page) => {
    if (typeof onPageChange === 'function') {
      onPageChange(page);
    }
  }
  const totalPage = Math.ceil(_totalRows / _limit);
  return (
    <div>
      <button
        disabled={_page <= 1}
        onClick={() => handClick(_page - 1)}
      >Prev</button>
      <button
        disabled={_page >= totalPage}
        onClick={() => handClick(_page + 1)}
      >Next</button>
    </div>
  );
}

export default Panigation;

Panigation.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Panigation.defaultProps = {
  onPageChange: null,
};