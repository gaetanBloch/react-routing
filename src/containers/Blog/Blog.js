import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

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
        <Switch>
          <Route path="/" component={Posts} exact />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} exact />
        </Switch>
      </div>
    );
  }
}

export default Blog;
