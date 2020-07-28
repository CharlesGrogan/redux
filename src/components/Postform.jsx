import React, { Component } from "react";

export default class Postform extends Component {
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
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <>
        <h2>Add Posts</h2>
        <form aria-label="form to add post" onSubmit={this.onSubmit}>
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
