import React, { Component } from 'react';

class CircleContainer extends Component {
    render() {
        const { backgroundColor='#259B24', content } = this.props;
        const style = {
            height: '150px',
            width: '150px',
            backgroundColor: backgroundColor,
            borderRight: 'solid 1px #bbbbbb',
            borderRadius: '75px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.5rem',
            color: '#ffffff'
        }

        return (
            <div style={style}>
                { content }
            </div>
        )
    }
}

export default CircleContainer;