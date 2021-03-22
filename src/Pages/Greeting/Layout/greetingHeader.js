import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import { } from 'antd';

const GreetingHeader = (props) => {
  const history = useHistory();
  const { className } = props;
  return (
    <div className='greeting-header'>

      <div className='greeting-header-left'>
        <span>Static Promotional Website</span>
      </div>

      <div className='greeting-header-right'>
        <span>My CV</span>
        <span>Buy Website</span>
      </div>

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
