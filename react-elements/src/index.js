import ReactDOM from 'react-dom';
import React from 'react';

const element = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

ReactDOM.render(element, document.getElementById('root'));
