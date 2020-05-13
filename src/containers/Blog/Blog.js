import React, { Component, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

// const AsyncNewPost = asyncComponent(() => {
//   return import('./NewPost/NewPost');
// });

const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state = {
    auth: true
  }

  componentDidMount() {
    this.makeNewPostAccessibleTimeout();
  }

  makeNewPostAccessibleTimeout = () => {
    setTimeout(() => {
      this.setState({auth: true});
    }, 5000);
  }

  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li><NavLink
                to="/posts/"
                activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
              >Posts</NavLink></li>
              <li><NavLink to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ?
            <Route path="/new-post" render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <NewPost />
              </Suspense>)
            } />
            : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1 style={{textAlign: 'center'}}>404 Not Found</h1>} />
          {/*<Redirect from="/" to="/posts" />*/}
          {/*<Route path="/" component={Posts} />*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;
