import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useMergeState } from '../../../Helpers/customHooks';
import PerfectCultivator from '../PerfectCultivator';

const Chapter = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const {
    className, title, value, goBack,
  } = props;
  return (
    <div className={classnames('chapter', className)}>
      <Button
        icon={<LeftOutlined />}
        className='chapter-go-back'
        onClick={goBack}
      />

      <div className='chapter-title'>
        {title}
      </div>

      <div className='chapter-content'>
        {PerfectCultivator[value]}
      </div>
    </div>
  );
};
Chapter.defaultProps = {
  className: '',
  title: '',
  value: 0,
  goBack: () => {},
};
Chapter.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
  goBack: PropTypes.func,
};

export default Chapter;
