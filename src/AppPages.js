import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import List from './portfolio/List';
import About from './about/About';
import Users from './users/Users';
import Blog from './blog/Blog';

class AppPages extends Component {
  render() {
    return (
      <Fragment>
        <Route path="/" exact component={List} />
        <Route path="/about/" component={About} />
        <Route path="/blog/" component={Blog} />
        <Route path="/users/" component={Users} />
      </Fragment>
    );
  }
}

export default AppPages;