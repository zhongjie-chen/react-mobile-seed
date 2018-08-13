import React, { PropTypes } from 'react'
import { render } from 'react-dom';
import './style.less';
class App extends React.Component {
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
