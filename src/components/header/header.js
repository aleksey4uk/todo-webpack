import React from 'react';
import { Typography } from 'antd';
import './header.css';
import { connect } from 'react-redux';

const { Text, Title } = Typography;

const Header = ({items=0}) => {
    return (
        <div className="header">
            <Spa/>
            <Title level={4}>Todo App</Title>
            <Text>Всего задач: {items}</Text>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.tasks.length
    }
}

export default connect(mapStateToProps)(Header);