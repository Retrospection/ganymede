import React, { Component } from 'react';
import style from './index.module.css';
import Line from './components/line';
import RoundContainer from './components/round-container';
import CircleContainer from './components/circle-container';


class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <Line color='#bbbbbb'/>
        <RoundContainer content='当前状态' />
        <Line color='#bbbbbb'/>
        <CircleContainer content='运行中'/>
        <Line color='#bbbbbb' />
      </div>
    );
  }
}

export default Home