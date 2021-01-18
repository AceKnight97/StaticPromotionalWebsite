import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { } from 'antd';

const InfoRow = (props) => {
  const { className, title, icon } = props;
  return (
    <div className={classnames('info-row-wrapper', className)}>
      <div className='info-row-icon'>
        {icon}
      </div>
      <div className='info-row-title'>
        <span>{title}</span>
      </div>
    </div>
  );
};
InfoRow.defaultProps = {
  className: '',
  title: '',
  icon: '',
};
InfoRow.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default InfoRow;
