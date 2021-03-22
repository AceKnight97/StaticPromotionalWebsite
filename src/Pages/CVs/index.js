import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CVInformation from './Layout/cvInformation';
import CVDetails from './Layout/cvDetails';
import './Style/_index.scss';

const MyCV2 = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.push('/');
  };

  return (
    <div className='my-cv-wrapper'>
      <div className='my-cv-2-main'>

        <CVInformation />

        <CVDetails />

      </div>

      <Button
        type='ghost'
        className='back-btn-wrapper'
        onClick={onClickBack}
      >
        <ArrowLeftOutlined />
      </Button>
    </div>
  );
};

MyCV2.defaultProps = {
};
MyCV2.propTypes = {
};

export default MyCV2;
