import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import PostList from './PostList';
import Panigation from '../Panigation';
import Search from './Search';

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    title_like: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      const query = queryString.stringify(filters);
      const url = `http://js-post-api.herokuapp.com/api/posts?${query}`;
      const res = await fetch(url);
      const resJson = await res.json();
      const { data, pagination } = resJson;
      setPosts(data);
      setPagination(pagination);
    }
    fetchData();
  }, [filters]);

  const onPageChange = (page) => {
    setFilters({
      ...filters,
      _page: page,
    });
  }

  const handleSearch = (obj) => {
    setFilters({
      ...filters,
      title_like: obj.searchText,
    });
  }
  return (
    <div>
      <Search onSubmit={handleSearch} />
      <PostList posts={posts} />
      <Panigation pagination={pagination} onPageChange={onPageChange} />
    </div>
  );
}

export default Posts;

Posts.propTypes = {
};