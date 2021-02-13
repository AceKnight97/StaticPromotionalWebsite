import React from 'react';
import CVInformation from './Layout/cvInformation';
import CVDetails from './Layout/cvDetails';

const MyCV2 = () => (
  <div className='my-cv-wrapper'>
    <div className='my-cv-2-main'>

      <CVInformation />

      <CVDetails />

    </div>
  </div>
);

MyCV2.defaultProps = {
};
MyCV2.propTypes = {
};

export default MyCV2;
