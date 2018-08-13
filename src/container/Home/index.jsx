import React from 'react';
import { render } from 'react-dom';
import { Button, WhiteSpace } from 'antd-mobile'; 
import './style.less';
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Button type="primary">default</Button>
                <WhiteSpace size="lg" />
                <Button type="primary">default</Button>
            </div>
        )
    }
}

export default Home
