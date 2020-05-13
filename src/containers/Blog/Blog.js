import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: 'new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</Link></li>
            </ul>
          </nav>
        </header>
        <Route path="/" component={Posts} exact />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
