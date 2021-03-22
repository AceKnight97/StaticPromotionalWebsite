import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import { } from 'antd';

const GreetingHeader = (props) => {
  const history = useHistory();
  const { className } = props;
  return (
    <div className={classnames('greeting-header', className)}>
      <span>Header</span>
    </div>
  );
};

GreetingHeader.defaultProps = {
  className: '',
};
GreetingHeader.propTypes = {
  className: PropTypes.string,
};

export default GreetingHeader;
