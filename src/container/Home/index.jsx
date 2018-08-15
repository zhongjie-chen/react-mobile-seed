import React from 'react';
import { render } from 'react-dom';
import { inject, observer } from 'mobx-react'
import { Button, WhiteSpace } from 'antd-mobile'; 
import './style.less';

@inject('store') @observer
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                <Button type="primary" onClick={this.props.store.add}>++</Button>
                <WhiteSpace size="lg" />
                <Button type="primary">{this.props.store.value}</Button>
            </div>
        )
    }
}

export default Home
