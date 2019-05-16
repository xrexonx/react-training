import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts?userId=2')
      .then(res => res.json())
      .then(data => data)
  }

  async componentDidMount() {
    const posts = await this.fetchData();
    this.setState({ posts })
  }

  render() {
    if (!this.state) {
      return null;
    }
    const { posts } = this.state;
    console.log({posts});
    return (
      <div className="mdl-grid portfolio-max-width">
        {posts && posts.map(post => <Item key={post.id} post={post} />)}
      </div>
    );
  }
}

export default List;