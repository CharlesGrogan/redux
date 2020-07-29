import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id} className="article" aria-label={post.title}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <>
        <h2>Posts</h2>
        {postItems}
      </>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired
}

const mapStateToProps = state => ({ 
  posts: state.posts.items
 })

export default connect(mapStateToProps, { fetchPosts })(Posts);