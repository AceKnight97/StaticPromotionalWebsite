import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import { PAGE_MANAGER } from '../Constants';
import reloadPageRequest from '../Redux/Actions/reload';
import Home from './Home';
import LightNovel from './LightNovel';
import MyCV from './MyCV';

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
