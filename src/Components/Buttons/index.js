import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { Button } from 'antd';

const ButtonCT = (props) => {
  const { className, type, title } = props;

  return (
    <Button type={type} className={classnames('button-ct-wrapper', className)}>
      {title}
    </Button>
  );
};

ButtonCT.defaultProps = {
  className: '',
  type: undefined,
  title: '',
};
ButtonCT.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
};

export default ButtonCT;
