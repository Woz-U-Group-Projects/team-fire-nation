import React from 'react';
const Comments = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);
