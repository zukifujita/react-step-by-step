import React from 'react';

class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
    }

    render() {
        return (
            <div>
                <button onClick = {() => { this.setState(state => ({number: state.number + 2})) } }>
                Hello world!
                </button>
                <p>
                    number: {this.state.number}
                </p>
            </div>
        )
    }
}

export default Number;