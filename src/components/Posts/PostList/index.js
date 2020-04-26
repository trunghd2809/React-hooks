import React from 'react';
import PropTypes from 'prop-types';

const PostList = (props) => {
  const { posts } = props;
  return (
    <ul className="post-list">
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};