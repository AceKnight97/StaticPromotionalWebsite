import React from 'react';
// import classnames from 'classnames';
import {
  MailOutlined, PhoneOutlined, GithubOutlined, EnvironmentOutlined,
} from '@ant-design/icons';
import _ from 'lodash';
import { Button } from 'antd';
import avatarIc from '../../../Images/Pages/CVs/myAvatar.jpg';
import InfoRow from './infoRow';

const CVInformation = () => {
  const showHeader = () => (
    <div className='my-cv-2-header'>
      <img src={avatarIc} className='my-cv-2-avatar' alt='Avatar img' />

      <div className='my-cv-2-names'>
        <div className='my-cv-2-lastname'>
          <span>Truong Thanh</span>
        </div>
        <div className='my-cv-2-firstname'>
          <span>Triet</span>
        </div>
        <div className='my-cv-2-role'>
          <span>Web-App developer</span>
        </div>
      </div>
    </div>
  );

  const showGeneralInfo = () => {
    const arr = [
      {
        icon: <MailOutlined />,
        title: 'tttriet1997@gmail.com',
      },
      {
        icon: <PhoneOutlined />,
        title: '(+84) 819 541 897',
      },
      {
        icon: <GithubOutlined />,
        title: 'https://aceknight97.github.io/greeting',
        type: 'LINK',
      },
      {
        icon: <EnvironmentOutlined />,
        title: 'District 7, Hochiminh city',
      },
    ];
    return (
      _.map(arr, (x, i) => (
        <InfoRow
          className={i === 0 ? 'mt24' : 'mt16'}
          key={i}
          icon={x.icon}
          title={x.title}
          type={x?.type}
        />
      ))
    );
  };

  const showIndustryKnowledge = () => {
    const arr = [
      'Web-App Develop',
      'Technical Research',
      'Team work',
      'Project progressing',
    ];
    return (
      <div className='my-cv-2-body'>
        <div className='my-cv-2-body-title'>
          <span>Industry Knowledge</span>
        </div>

        {_.map(arr, (x, i) => (
          <div key={i} className='my-cv-2-body-content'>
            <span className='a-dot'>●</span>
            <span>{x}</span>
          </div>
        ))}
      </div>
    );
  };

  const showLanguages = () => {
    const arr = [
      'Vietnamese',
      'English',
    ];
    return (
      <div className='my-cv-2-body'>
        <div className='my-cv-2-body-title'>
          <span>Languages</span>
        </div>

        {_.map(arr, (x, i) => (
          <div key={i} className='my-cv-2-body-content'>
            <span>{x}</span>
          </div>
        ))}
      </div>
    );
  };

  const showSocial = () => {
    const arr = [
      'https://www.facebook.com/profile.php?id=100015087697713',
      'https://www.linkedin.com/in/tri%E1%BA%BFt-tr%C6%B0%C6%A1ng-thanh-89a92b161/',
    ];
    return (
      <div className='my-cv-2-body'>
        <div className='my-cv-2-body-title'>
          <span>Social</span>
        </div>

        {_.map(arr, (x, i) => (
          <Button
            key={i}
            onClick={() => window.open(x, '')}
            type='link'
            ghost
            className='my-cv-2-body-link'
          >
            {x}
          </Button>
        ))}
      </div>
    );
  };

  const showHobbies = () => {
    const arr = [];
    return (
      <div className='my-cv-2-body'>
        <div className='my-cv-2-body-title'>
          <span>Hobbies</span>
        </div>
        {_.map(arr, (x, i) => (
          <div key={i} className=''>
            <span>{x}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className='my-cv-2-left'>
      {showHeader()}
      {showGeneralInfo()}
      {showIndustryKnowledge()}
      {showLanguages()}
      {showSocial()}
      {showHobbies()}
    </div>
  );
};

CVInformation.defaultProps = {
};
CVInformation.propTypes = {
};

export default CVInformation;
