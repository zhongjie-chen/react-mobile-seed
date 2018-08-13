import React from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from '../container/Home/index.jsx'
import App from '../container/App.jsx'
// var createHashHistory = require('react-router/node_modules/history').createHashHistory;  
// var appHistory = router.useRouterHistory(createHashHistory)({queryKey:false}); 

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap
