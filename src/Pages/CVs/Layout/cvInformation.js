import React from 'react';
// import classnames from 'classnames';
import {
  MailOutlined, PhoneOutlined, YoutubeOutlined, EnvironmentOutlined,
  ReadOutlined, GlobalOutlined, DribbbleOutlined, RocketOutlined,
} from '@ant-design/icons';
import _ from 'lodash';
import { Button } from 'antd';

import {
  SOCICAL_DATA, INDUSTRY_KNOWLEDGE_DATA, LANGUAGE_DATA,
} from '../../../Constants/cvInfo';

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
        icon: <GlobalOutlined />,
        title: 'https://github.com/AceKnight97/staticpromotionalwebsite',
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

  const showIndustryKnowledge = () => (
    <div className='my-cv-2-body'>
      <div className='my-cv-2-body-title'>
        <span>Industry Knowledge</span>
      </div>

      {_.map(INDUSTRY_KNOWLEDGE_DATA, (x, i) => (
        <div key={i} className='my-cv-2-body-content'>
          <span className='a-dot'>●</span>
          <span>{x}</span>
        </div>
      ))}
    </div>
  );

  const showLanguages = () => (
    <div className='my-cv-2-body'>
      <div className='my-cv-2-body-title'>
        <span>Languages</span>
      </div>

      {_.map(LANGUAGE_DATA, (x, i) => (
        <div key={i} className='my-cv-2-body-content'>
          <span>{x}</span>
        </div>
      ))}
    </div>
  );

  const showSocial = () => (
    <div className='my-cv-2-body'>
      <div className='my-cv-2-body-title'>
        <span>Social</span>
      </div>

      {_.map(SOCICAL_DATA, (x, i) => (
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

  const showHobbies = () => {
    const arr = [
      {
        title: 'Reading',
        icon: <ReadOutlined />,
      },
      {
        title: 'Movies',
        icon: <YoutubeOutlined />,
      },
      {
        title: 'Soccer',
        icon: <DribbbleOutlined />,
      },
      {
        title: 'Science Research',
        icon: <RocketOutlined />,
      },
    ];
    return (
      <div className='my-cv-2-body'>
        <div className='my-cv-2-body-title'>
          <span>Hobbies</span>
        </div>

        <div className='my-cv-2-body-hobbies-wrapper'>
          {_.map(arr, (x, i) => (
            <div key={i} className='my-cv-2-hobbies'>
              {
                typeof (x.icon) === 'object'
                  ? (
                    <div className='my-cv-2-hobbies-icon'>
                      {x.icon}
                    </div>
                  )
                  : (
                    <img
                      src={x.icon}
                      alt='Hobbies icon'
                      className='my-cv-2-hobbies-icon'
                    />
                  )
              }
              <div className='my-cv-2-hobbies-title'>
                <span>{x.title}</span>
              </div>
            </div>
          ))}
        </div>

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
