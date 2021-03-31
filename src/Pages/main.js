import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import reloadPageRequest from '../Redux/Actions/reload';

import { PAGE_MANAGER } from '../Constants';

// import NotFound from './NotFound';
// import PrivateRoute from './PrivateRoute';
import Greeting from './Greeting';
import Contact from './Contact';
import MyCV from './CVs';

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
          <Route path='/my-cv' name='My CV' component={MyCV} />
          <Route path='/staticpromotionalwebsite' name='Greeting' component={Greeting} />
          <Route path='/contact' name='Contact' component={Contact} />
          {/* <PrivateRoute path='/' name='full' component={NotFound} /> */}
          {/* <Route path='*' name='notFound' component={NotFound} /> */}
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
