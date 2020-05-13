import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import './Posts.css'
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    error: null
  }

  getPosts = async () => {
    try {
      const response = await axios.get('/posts');
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Gaëtan'
        }
      })
      this.setState({posts: updatedPosts})
    } catch (error) {
      this.setState({error: true});
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  postSelectedHandler = (id) => {
    // this.props.history.push('/posts/' + id);
    this.props.history.push({pathname: '/posts/' + id});
  }

  render() {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link key={post.id} to={'/posts/' + post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)} />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} component={FullPost} exact />
      </div>
    )
  }
}

export default Posts;
