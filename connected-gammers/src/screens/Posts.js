import React from 'react';
import Header from '../component/Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var Post = ({ match }) => (
  <div>
    <Header title="Post" />

    
    <Route path={`${match.url}/:postid`} component={Post} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a post.</h3>}
    />

  </div>
);

export default Post;
