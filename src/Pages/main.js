import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import reloadPageRequest from '../Redux/Actions/reload';

import { PAGE_MANAGER } from '../Constants';

import Home from './Home';
import MyCV from './CVs';
import LightNovel from './LightNovel';

const Main = (props) => {
  useEffect(() => {
    window.onload = () => {
      props.reloadPageRequest();
    };
  }, []);
  return (
    <main className='div-root'>
      <Router>
        <Switch>
          <Route path='/staticpromotionalwebsite' name='Home' component={Home} />
          <Route path='/my-cv' name='My CV' component={MyCV} />
          <Route path='/light-novel' name='My Light Novel' component={LightNovel} />
          <Redirect path='/' to={{ pathname: PAGE_MANAGER.HOME }} />
        </Switch>
      </Router>
    </main>
  );
};

Main.defaultProps = {};

Main.propTypes = {
  reloadPageRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  reloadPageRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
