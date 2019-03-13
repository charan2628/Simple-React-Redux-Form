import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
const {render} = ReactDOM;

window.React = React;


render(<Container />, document.getElementById('react-container'));
