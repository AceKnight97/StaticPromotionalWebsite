import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';
import Greeting from './Greeting';

const SignIn = () => <div><span>Sign In</span></div>;

class Main extends React.Component {
  render() {
    return (
      <main className="div-root">
        <Router>
          <Switch>
            <Route path="/sign-in" name="Sign In" component={SignIn} />
            <Route path="/greeting" name="Greeting" component={Greeting} />
            <PrivateRoute path="/" name="full" component={NotFound} />
            <Route path="*" name="notFound" component={NotFound} />
          </Switch>
        </Router>
      </main>
    );
  }
}

Main.defaultProps = {
};

Main.propTypes = {
};
export default Main;

// <Router>
// <Switch>
//   <Route path="/sign-in" name="Sign In" component={SignIn} />
//   {/* <PrivateRoute path="/" name="full" component={Full} authenticated={!!authenticated} /> */}
// </Switch>
// </Router>
