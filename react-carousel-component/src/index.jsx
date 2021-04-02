import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemon = [
  {
    name: 'squirtle',
    id: 1
  },
  {
    name: 'sandshrew',
    id: 2
  },
  {
    name: 'umbreon',
    id: 3
  },
  {
    name: 'mew',
    id: 4
  },
  {
    name: 'magikarp',
    id: 5
  }
];

ReactDOM.render(
  <Carousel pokemon={pokemon}/>,
  document.getElementById('root')
);
