import React, { Component } from 'react';

import './NewPost.css';
import axios from 'axios';
import { Redirect } from 'react-router';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'gaetan',
    submitted: false
  }

  postData = async (post) => {
    const response = await axios.post('/posts', post);
    console.log(response);
    // this.setState({submitted: true});
    // this.props.history.replace('/posts');
    this.props.history.push('/posts');
  };

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    }
    this.postData(post);
  }

  render() {
    let redirect = null;
    if (this.state.submitted) {
      redirect = <Redirect to="/posts" />
    }

    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({title: event.target.value})} />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({content: event.target.value})} />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({author: event.target.value})}>
          <option value="Gaëtan">Gaëtan</option>
          <option value="Jérémy">Jérémy</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
