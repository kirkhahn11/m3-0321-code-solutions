import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const pokemon = [
  {
    url: '../img/squirtle.jpeg',
    id: 1
  },
  {
    url: '../img/sandshrew.jpeg',
    id: 2
  },
  {
    url: '../img/umbreon.jpeg',
    id: 3
  },
  {
    url: '../img/mew.jpeg',
    id: 4
  },
  {
    url: '../img/magikarp.png',
    id: 5
  }
];

ReactDOM.render(
  <Carousel pokemon={pokemon}/>,
  document.getElementById('root')
);
