import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const element = <CustomButton />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
