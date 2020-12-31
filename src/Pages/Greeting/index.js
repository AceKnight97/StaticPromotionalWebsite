import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { } from 'antd';
import { useMergeState } from '../../Helpers/customHooks';
import logo from '../../logo.svg';

const Greeting = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });

  const { className } = props;

  return (
    <div className={classnames('greeting-wrapper', className)}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

Greeting.defaultProps = {
  className: '',
};
Greeting.propTypes = {
  className: PropTypes.string,
};

export default Greeting;
