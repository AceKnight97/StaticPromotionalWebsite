import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { } from 'antd';
import { useMergeState } from '../../Helpers/customHooks';
import logo from '../../logo.svg';
import ButtonCT from '../../Components/Buttons';

const Greeting = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });

  const { className } = props;

  const showCol1 = () => (
    <div className="col-ct">
      <ButtonCT className="col-btn" title="Test button" />
      <ButtonCT className="col-btn" title="Test button" />
      <ButtonCT className="col-btn" title="Test button" />
    </div>
  );
  const showCol2 = () => (
    <div className="col-ct">
      <span>col1</span>
      <img src={logo} className={classnames('App-logo', 'react-icon')} alt="logo" />
      <span>col1</span>
    </div>
  );
  const showCol3 = () => (
    <div className="col-ct">
      <span>col1</span>
    </div>
  );

  return (
    <div className={classnames('greeting-wrapper', className)}>
      {showCol1()}
      {showCol2()}
      {showCol1()}
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
