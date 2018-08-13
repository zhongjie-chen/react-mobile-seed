import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { hashHistory } from 'react-router';
import RouteMap from './route/routeMap.jsx';

render(<RouteMap />, document.getElementById('root'))
