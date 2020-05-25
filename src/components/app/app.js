import React from 'react';
import { Card } from 'antd';
import AddPanel from '../add-panel';
import Header from '../header';
import Lists from '../list';
import './app.css';

const App = ({data}) => {
    return (
        <div className="site-card-border-less-wrapper app">
            <Card className="card-app">
                <Header/>
                <Lists/>
                <AddPanel />
            </Card>
        </div>
    )
}

export default App;