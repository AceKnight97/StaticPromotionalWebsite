import React from 'react';
import classnames from 'classnames';
import {
  MailOutlined, PhoneOutlined, DollarOutlined, EnvironmentOutlined,
} from '@ant-design/icons';
import _ from 'lodash';
import avatarIc from '../../Images/Pages/CVs/myAvatar.jpg';
import hcmusIC from '../../Images/Pages/CVs/logo-khtn.png';
import BodyTopic from './Layout/bodyTopic';
import ReferenceItem from './Layout/referenceItem';
import InfoRow from './Layout/infoRow';

const MyCV2 = (props) => {
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

  const showLeft = () => {
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
        icon: <DollarOutlined />,
        title: 'https://aceknight97.github.io/greeting',
      },
      {
        icon: <EnvironmentOutlined />,
        title: '327 Le Van Luong street, District 7, Hochiminh city',
      },
    ];
    return (
      <div className='my-cv-2-left'>
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

        {_.map(arr, (x, i) => (
          <InfoRow
            className={i === 0 ? 'mt24' : 'mt16'}
            key={i}
            icon={x.icon}
            title={x.title}
          />
        ))}

      </div>
    );
  };

  return (
    <div className='my-cv-wrapper'>
      <div className='my-cv-2-main'>

        {showLeft()}

        <div className='my-cv-2-right'>
          <span>asdasdsd</span>
        </div>
      </div>
    </div>
  );
};

MyCV2.defaultProps = {
};
MyCV2.propTypes = {
};

export default MyCV2;
