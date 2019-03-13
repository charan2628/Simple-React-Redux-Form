import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import StoreFactory from './util/Store';
import data from './util/data';

window.React = React;

let store = StoreFactory(data);

const render = () => {
    ReactDOM.render(
        <Container store={store} />,
        document.getElementById('react-container')
    )
}

store.subscribe(render);

render();

