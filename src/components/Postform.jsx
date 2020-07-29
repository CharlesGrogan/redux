import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.createPost(post);
  }

  render() {
    return (
      <>
        <h2>Add Posts</h2>
        <form aria-label="form to add post" id onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title" name="title">
              Title
            </label>
            <br />
            <input
              onChange={this.onChange}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Enter Title"
              
            />
          </div>

          <div>
            <label htmlFor="body" name="body">
              Body
            </label>
            <br />
            <textarea
              onChange={this.onChange}
              value={this.state.body}
              rows="7"
              name="body"
              placeholder="Tell us your story..."
            />
          </div>

          <button type="submit" className="btn">
            Submit Post
          </button>
        </form>
      </>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);