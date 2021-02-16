import React from 'react';
import _ from 'lodash';
import { Button } from 'antd';

import BodyTopic from './bodyTopic';
import CVExp from './cvExp';
import {
  EXPERIENCE_DATA, EDUCATION_DATA, SKILLS_DATA, OTHER_SKILLS_DATA,
  TEAM_PRODUCTS,
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

  const showSkillsIcon = (data = []) => (
    <div className='my-skills-wrapper'>
      {_.map(data, (x, i) => (
        <div key={i} className='my-skills-div'>
          <img
            src={x.icon}
            className='my-skills-icon'
            alt='logo'
          />
        </div>
      ))}
    </div>
  );

  const showMySkills = () => (
    <>
      <BodyTopic title='My Skills' className='mt24' />

      {showSkillsIcon(SKILLS_DATA)}

    </>
  );
  const showOtherSkills = () => (
    <>
      <BodyTopic title='Other Skills' className='mt24' />

      {showSkillsIcon(OTHER_SKILLS_DATA)}

    </>
  );

  const showTeamProduct = () => (
    <>
      <BodyTopic title='Team Products' className='mt24' />

      {_.map(TEAM_PRODUCTS, (x, i) => (
        <div key={i} className='team-product-wrapper'>
          <div key={i} className='team-product-logo'>
            <img
              src={x.icon}
              className='team-product-icon'
              alt='logo'
            />
          </div>

          <div className='team-product-info'>
            <div className='team-product-name'>
              <span>{x.name}</span>
            </div>
            <Button
              onClick={() => window.open(x.link, '')}
              type='link'
              ghost
              className='team-product-link'
            >
              <span>{x.link}</span>
            </Button>
          </div>
        </div>
      ))}

    </>
  );

  return (
    <div className='my-cv-2-right'>
      {showExperience()}

      {showEducation()}

      {showMySkills()}

      {showOtherSkills()}

      {showTeamProduct()}
    </div>
  );
};

CVDetails.defaultProps = {
};
CVDetails.propTypes = {
};

export default CVDetails;
