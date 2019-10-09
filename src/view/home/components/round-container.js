import React, { Component } from 'react';

class RoundContainer extends Component {
    render() {

        const { content, borderColor = '#bbbbbb' } = this.props;

        const style = {
            border: `solid 1px ${borderColor}`,
            borderRadius: '15px',
            padding: '5px 20px',
            fontSize: '15px'
        };

        return (
            <div style={style}>
                { content }
            </div>
        );
    }
}

export default RoundContainer;
