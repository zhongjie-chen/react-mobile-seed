import React, { PropTypes, Component } from 'react'
import { inject, observer } from 'mobx-react';
import { render } from 'react-dom';
import './style.less';

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = {
    children: PropTypes.any
};
export default App
