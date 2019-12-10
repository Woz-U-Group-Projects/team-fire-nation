import React from 'react';
import Header from '../components/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var Post = ({ match }) => (
  <div>
    <h2>Post</h2>

    
    <Route path={`${match.url}/:postid`} component={Post} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a post.</h3>}
    />

  </div>
);

export default Post;
