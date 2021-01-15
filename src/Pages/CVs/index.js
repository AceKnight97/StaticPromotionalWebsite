import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import avatarIc from '../../Images/Pages/CVs/myAvatar.jpg';
import hcmusIC from '../../Images/Pages/CVs/logo-khtn.png';
import BodyTopic from './Layout/bodyTopic';
import ReferenceItem from './Layout/referenceItem';

const MyCV = (props) => {
  const { className } = props;

  const showHeader = () => (
    <div className='my-cv-header'>
      <img src={avatarIc} className='my-cv-avatar' alt='Avatar img' />

      <div className='contact-info'>
        <div className='contact-info-name'>
          <span>Truong Thanh Triet</span>
        </div>

        <div className='contact-info-phone-email'>
          <span>(+84) 819 541 897 / tttriet1997@gmail.com</span>
        </div>

        <div className='contact-info-address'>
          <span>327 Le Van Luong street, District 7, Hochiminh city</span>
        </div>
      </div>

      <img src={hcmusIC} className='uni-logo' alt='Logo img' />
    </div>
  );

  const showSummary = () => (
    <>
      <BodyTopic title='Summary' />

      <div className='summary-wrapper'>
        <div>
          ● I will graduate from the University of Science in September, 2019. My major is Computer Science
          (Computer Vision). I am interested in game design, GUI programming, artificial intelligence and
          testing.
        </div>
        <div className='summary-content'>
          ● Besides my technology and science interests, I enjoy social experiences such as making new friends
          and connecting with foreign visitors to practice my listening and speaking skills using the English
          language. I also enjoy team sports, working with other people in the team. I used do the project at the
          University and test it myself from then I know I want to be a tester.
        </div>
        <div className='summary-content'>
          ● I am self-motivated and a hard worker. You will see from my CV that besides my university study, I
          have worked to be helpful to people as a teacher and a personal tour guide to welcome people to our
          country. I have used that opportunity to improve my English skills, while learning how to deliver good
          customer service
        </div>
      </div>
    </>
  );

  const showEducation = () => (
    <>
      <BodyTopic title='Education' />
      <div className='summary-wrapper'>
        <div className='b'>
          University of Science
        </div>
        <div className='summary-content b'>
          Course - Information Technology
        </div>
        <div className='summary-content'>
          <div>
            ● Date of Graduation: September 2019.
          </div>
          <div>
            ● Major: Computer Science
          </div>
        </div>
        <div className='summary-content'>
          Programming Language: C, C++ since 2015. Python is the main language used for the University graduate project.
        </div>
      </div>
    </>
  );

  const showExperience = () => (
    <>
      <BodyTopic title='Experience' />

      <div className='summary-wrapper'>
        <div className='b'>
          University of Science
        </div>
        <div className='summary-content'>
          ● Machine learning: work on “Handwritten Digital Recognition using Support Vector Machine”
          project.
        </div>
        <div>
          ● Image and video processing application: work on “Object Detection – YOLO Model” project.
        </div>
        <div>
          ● IOT: work on “Object Detection System” project.
        </div>
        <div>
          ● Graduate project: work on “People Counting in Image Based on Human Detection Using Deep Convolutional Neural Network.”
        </div>
        <div className='summary-content b'>
          Other
        </div>
        <div>
          ● Private tutor in Math and English for a secondary student since Summer 2017.
        </div>
        <div>
          ● Since May 2018 I have provided private tour guide services in HCMC to more than 15 clients,
        </div>
        <div>
          including site seeing, dining experiences, help with hotels and transportation.
        </div>
      </div>
    </>
  );

  const showSkillsAbilities = () => (
    <>
      <BodyTopic title='Skills & Abilities' />

      <div className='summary-wrapper'>
        <div className='b'>
          Language
        </div>
        <div className='summary-content'>
          Vietnamese – English: Vietnamese is my first language. Communication and Academic English.
        </div>
        <div className='summary-content b'>
          Skills
        </div>
        <div>
          B2 driving license since July 2018 - 3D design in Blender - Cooking.
        </div>
        <div className='summary-content b'>
          Personal Time Activities
        </div>
        <div>
          Football, doing exercise, playing guitar, listening to music and audio.
        </div>
      </div>
    </>
  );

  const showReferences = () => {
    const JayHans = {
      name: 'Jay Hans.',
      occupation: 'Business Entrepreneur, Traveler.',
      emailAddress: 'xiaohu_188@hotmail.com',
      tel: '+(84) 0523 784 906.',
    };
    const BryanBlondeau = {
      name: 'Bryan Blondeau.',
      occupation: 'Ship engineer - Project manager.',
      emailAddress: 'bryanblondeau@gmail.com.',
      tel: '+(84) 918 972 490.',
    };
    return (
      <>
        <BodyTopic title='References' />
        <div className='my-cv-reference'>
          <ReferenceItem referenceData={JayHans} />
          <ReferenceItem referenceData={BryanBlondeau} />
        </div>
      </>
    );
  };

  const showBody = () => (
    <div className='my-cv-body'>
      {showSummary()}
      {showEducation()}
      {showExperience()}
      {showSkillsAbilities()}
      {showReferences()}
    </div>
  );

  return (
    <div className={classnames('my-cv-wrapper', className)}>
      <div className='my-cv-main'>
        {showHeader()}

        {showBody()}
      </div>
    </div>
  );
};

MyCV.defaultProps = {
  className: '',
};
MyCV.propTypes = {
  className: PropTypes.string,
};

export default MyCV;
