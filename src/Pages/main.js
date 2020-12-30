import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const SignIn = () => <div><span>Sign In</span></div>;

class Main extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/sign-in" name="Sign In" component={SignIn} />
            <div>
              <span>
                ABC123
              </span>
            </div>
          </Switch>
        </Router>
      </>
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
