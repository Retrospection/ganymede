import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import style from './index.module.css';

import Home from '../home';
import Index from '../index';
import Monitor from '../monitor';

const mapState = state => ({
  
});

const mapDispatch = dispatch => ({
  
});

class RouterPage extends Component {
  render() {
    return (
      <div className={style.container}>
        <Switch>
          <Route path='/index' component={Index} />
          <Route path='/home' component={Home} />
          <Route path='/monitor' component={Monitor} />
        </Switch>
        <div className={style.navbar}>
          <Link to="/index" className={`${style['navbar-item']} ${this.hasChosen('/index') ? style['navbar-item__chosen'] : ''}`}>
            <div className={style['navbar-item__icon']}>
              <i className="iconfont icon-home" />
            </div>
            <div>
              首页
            </div>
          </Link>
          <Link to="/monitor" className={`${style['navbar-item']} ${this.hasChosen('/monitor') ? style['navbar-item__chosen'] : ''}`}>
            <div className={style['navbar-item__icon']}>
              <i className="iconfont icon-call" />
            </div>
            <div>
              监控
            </div>
          </Link>
          <Link to="/home" className={`${style['navbar-item']} ${this.hasChosen('/home') ? style['navbar-item__chosen'] : ''}`}>
            <div className={style['navbar-item__icon']}>
              <i className="iconfont icon-nickname" />
            </div>
            <div>
              我
            </div>
          </Link>
        </div>
      </div>
    )
  }

  hasChosen = pathname => this.props.location.pathname === pathname
}



export default connect(mapState, mapDispatch)(RouterPage)

