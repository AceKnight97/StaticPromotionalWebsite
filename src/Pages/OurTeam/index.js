import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { } from 'antd';
import { useMergeState } from '../../Helpers/customHooks';
import MainHeader from '../Common/mainHeader';

const OurTeam = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const { className } = props;
  return (
    <div className={classnames('our-team', className)}>
      <MainHeader />
      <span>my component</span>
    </div>
  );
};
OurTeam.defaultProps = {
  className: '',
};
OurTeam.propTypes = {
  className: PropTypes.string,
};

export default OurTeam;
