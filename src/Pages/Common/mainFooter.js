import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { Button } from 'antd';
import { SkypeFilled, FacebookFilled } from '@ant-design/icons';
import { useMergeState } from '../../Helpers/customHooks';

const FACE_BOOK = 'https://www.facebook.com/profile.php?id=100015087697713';

const MainFooter = (props) => {
  const [state, setState] = useMergeState({
    data: [],
  });
  const { className } = props;

  return (
    <div className={classnames('main-footer', className)}>

      <div className='skype'>
        <SkypeFilled
          className='footer-icon'
        />
        <div className='email'>
          <span>tttriet1997@gmail.com</span>
        </div>
      </div>

      <div className='facebook'>
        <FacebookFilled
          className='footer-icon facebook-color'
        />
        <Button
          onClick={() => window.open(FACE_BOOK, '')}
          type='link'
          className='email'
        >
          {FACE_BOOK}
        </Button>
      </div>

    </div>
  );
};
MainFooter.defaultProps = {
  className: '',
};
MainFooter.propTypes = {
  className: PropTypes.string,
};

export default MainFooter;
