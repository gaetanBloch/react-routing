import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

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
              <li><NavLink
                to="/"
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
                exact>Home</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
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
