import React from 'react';
import _ from 'lodash';

import BodyTopic from './bodyTopic';
import CVExp from './cvExp';
import {
  EXPERIENCE_DATA, EDUCATION_DATA,
} from '../../../Constants/cvInfo';

const CVDetails = () => {
  const showExperience = () => (
    <>
      <BodyTopic title='Experience' />

      {_.map(EXPERIENCE_DATA, (x, i) => (
        <CVExp key={i} data={x} />
      ))}

    </>
  );
  const showEducation = () => (
    <>
      <BodyTopic title='Education' className='mt24' />

      <CVExp data={EDUCATION_DATA[0]} />
    </>
  );
  const showMySkills = () => (
    <BodyTopic title='My Skills' className='mt24' />

  );
  const showOtherSkills = () => (
    <BodyTopic title='Other Skills' className='mt24' />

  );
  return (
    <div className='my-cv-2-right'>
      {showExperience()}

      {showEducation()}

      {showMySkills()}

      {showOtherSkills()}
    </div>
  );
};

CVDetails.defaultProps = {
};
CVDetails.propTypes = {
};

export default CVDetails;
