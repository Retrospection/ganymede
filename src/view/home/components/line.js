import React, { Component } from 'react';

class Line extends Component {
    render() {
        const { height = '50px', color='#cccccc' } = this.props;
        const style = {
            height,
            borderRight: `solid 1px ${color}`,
            margin: '10px 0'
        }

        return (
            <div style={style}></div>
        )
    }
}

export default Line;