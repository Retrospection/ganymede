import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import style from './index.module.css';

import Home from '../home';
import Index from '../index';
import Monitor from '../monitor';

const mapState = state => ({
  
});

const mapDispatch = (dispatch) => ({
  
});



const RouterPage = props => {
  return (
    <div className={style.container}>
      <Switch>
        <Route path='/index' component={Index} />
        <Route path='/home' component={Home} />
        <Route path='/monitor' component={Monitor} />
      </Switch>
      <div className={style.navbar}>
        <div className={style['navbar-item']}>
          <div className={style['navbar-item__icon']}>
            <i className="iconfont icon-home" />
          </div>
          <div>
            <Link to="/index" className={style['navbar-item__content']}>首页</Link>
          </div>
        </div>
        <div className={style['navbar-item']}>
          <div className={style['navbar-item__icon']}>
            <i className="iconfont icon-call" />
          </div>
          <div>
            <Link to="/monitor" className={style['navbar-item__content']}>监控</Link>
          </div>
        </div>
        <div className={style['navbar-item']}>
          <div className={style['navbar-item__icon']}>
            <i className="iconfont icon-nickname" />
          </div>
          <div>
            <Link to="/home" className={style['navbar-item__content']}>监控</Link>
          </div>
        </div>
      </div>
    </div>
  )
}



export default connect(mapState, mapDispatch)(RouterPage)

