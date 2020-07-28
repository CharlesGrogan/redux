import React, { Component } from "react";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }
  render() {
    const postItems = this.state.posts.map((post) => (
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
