import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import showDogImage from './components/showDogImage';
import {Route,Router} from 'react-router';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from 'react-router-dom';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
    <Switch>
        <Route path="/app" component = {App}/>
        <Route path="/showDogImage/:handle" component = {showDogImage}/>
    </Switch>
</BrowserRouter>
</Provider>,
document.getElementById('root')
);
