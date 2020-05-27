import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
    state = {
        error: false
    }

    componentDidCatch(error) {
        this.setState({error})

    }

    render() {
    if (this.state.error) return <h1>Извините, возникла ошибка >> {this.state.error.message}</h1>
        return this.props.children;
    }
}

