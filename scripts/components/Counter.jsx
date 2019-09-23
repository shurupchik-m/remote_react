import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();

        console.log('constructor: ', this);

        this.state = {
            count: 0
        };

        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
    }

    onIncrease() {
        console.log(this);
        this.setState({ count: this.state.count + 1 })
    }

    onDecrease() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        const { msg } = this.props;

        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.onIncrease}>increase</button>
                <button onClick={this.onDecrease}>decrease</button>
                <h2>{'asdfghj'}</h2>
                <h2>{true}</h2>
                <h2>{null}</h2>
                <h2>{undefined}</h2>
                <h2>{msg}</h2>
            </div>
        )
    }
}

export default Counter;
