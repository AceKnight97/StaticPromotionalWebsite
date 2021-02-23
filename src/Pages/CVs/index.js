import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import CVInformation from './Layout/cvInformation';
import CVDetails from './Layout/cvDetails';

const MyCV2 = () => (
  <div className='my-cv-wrapper'>
    <div className='my-cv-2-main'>

      <CVInformation />

      <CVDetails />

    </div>

    <Button type='ghost' className='back-btn-wrapper'>
      <ArrowLeftOutlined />
    </Button>
  </div>
);

MyCV2.defaultProps = {
};
MyCV2.propTypes = {
};

export default MyCV2;
