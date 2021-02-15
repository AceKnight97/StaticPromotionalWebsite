import React from 'react';
import BodyTopic from './bodyTopic';

const CVDetails = () => {
  const showExperience = () => (
    <BodyTopic title='Experience' />

  );
  const showEducation = () => (
    <BodyTopic title='Education' className='mt24' />

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
