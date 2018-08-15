import React from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider, observer } from 'mobx-react';
import store from '../store/index';
import Home from '../container/Home/index.jsx'
import App from '../container/App.jsx'
// var createHashHistory = require('react-router/node_modules/history').createHashHistory;  
// var appHistory = router.useRouterHistory(createHashHistory)({queryKey:false}); 
class RouteMap extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Home}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
export default RouteMap
