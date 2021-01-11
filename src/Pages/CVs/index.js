import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { } from 'antd';
import { useMergeState } from '../../Helpers/customHooks';

const MyCV = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });

  const { className } = props;

  return (
    <div className={classnames('my-cv-wrapper', className)}>
      <span>My CV</span>
    </div>
  );
};

MyCV.defaultProps = {
  className: '',
};
MyCV.propTypes = {
  className: PropTypes.string,
};

export default MyCV;
