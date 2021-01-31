import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import {} from 'antd';
import { useMergeState } from '../../Helpers/customHooks';
import logo from '../../logo.svg';
import ButtonCT from '../../Components/Buttons';

const Greeting = (props) => {
  const history = useHistory();

  const { className } = props;

  const showCol1 = () => {
    const titleArr = [
      {
        title: 'My CV',
        onClick: () => history.push('/my-cv'),
        type: 'primary',
      },
      {
        title: 'Buy website',
        onClick: () => history.push('/my-cv'),
        type: 'primary',
      },
      {
        title: 'Hire Tour Guide In HCM City',
        onClick: () => history.push('/my-cv'),
        type: 'primary',
      },
    ];
    return (
      <div className='col-ct'>
        {_.map(titleArr, (x, i) => (
          <ButtonCT
            key={i}
            onClick={x.onClick}
            type={x.type}
            className='col-btn'
            title={x.title}
          />
        ))}
      </div>
    );
  };

  const showCol2 = () => (
    <div className='col-ct'>
      <ButtonCT type='primary' className='col-btn' title='Vietnam Real Estate Invest/Trading' />
      <img
        src={logo}
        className={classnames('App-logo', 'react-icon')}
        alt='logo'
      />
      <ButtonCT type='primary' className='col-btn' title='Buy Website' />
    </div>
  );

  const showCol3 = () => {
    const titleArr = [
      {
        title: 'Rent Home/Store',
        onClick: () => history.push('/my-cv'),
        type: 'primary',
      },
      {
        title: 'HCM Assistant',
        onClick: () => history.push('/my-cv'),
        type: 'primary',
      },
      {
        title: 'Everything In The World',
        onClick: () => history.push('/my-cv'),
        type: 'primary',
      },
    ];
    return (
      <div className='col-ct'>
        {_.map(titleArr, (x, i) => (
          <ButtonCT
            key={i}
            onClick={x.onClick}
            type={x.type}
            className='col-btn'
            title={x.title}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={classnames('greeting-wrapper', className)}>
      {showCol1()}
      {showCol2()}
      {showCol3()}
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
