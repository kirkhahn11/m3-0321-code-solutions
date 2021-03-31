import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const books = [
  {
    author: 'Douglas Adams',
    title: 'Hitchhikers Guide to the Galaxy',
    id: 1
  },
  {
    author: 'Frank Herbert',
    title: 'Dune',
    id: 2
  },
  {
    author: 'Christopher Moore',
    title: 'Lamb',
    id: 3
  }
];

ReactDOM.render(
  <Accordion books={books}/>,
  document.getElementById('root')
);
