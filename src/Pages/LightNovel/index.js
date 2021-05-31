import React from 'react';
import { Button } from 'antd';
import _ from 'lodash';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useMergeState } from '../../Helpers/customHooks';

import { PAGE_MANAGER } from '../../Constants';
import { PERFECT_CULTIVATOR } from './constant';

const LightNovel = () => {
  const history = useHistory();
  const params = useParams();
  console.log({ params });
  const [state, setState] = useMergeState({
  });

  return (
    <div className='light-novel'>
      <div className='light-novel-header'>Wellcome</div>

      <div className='light-novel-body'>

        <div className='light-novel-title'>
          Perfect Cultivator
        </div>

        {
          _.map(PERFECT_CULTIVATOR, (x, index) => (
            <Link
              to='/'
              key={index}
              className='light-novel-chapter'
            >
              {x.title}
            </Link>
          ))
}
      </div>

    </div>
  );
};
LightNovel.defaultProps = {
};
LightNovel.propTypes = {
};
export default LightNovel;
