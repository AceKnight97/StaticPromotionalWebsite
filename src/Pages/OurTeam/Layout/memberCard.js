import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';
import { Card } from 'antd';

const MemberCard = (props) => {
  const {
    className, data,
  } = props;
  console.log({ data });
  const {
    icon, name, dob,
    role, skills, exp, programming,
    email, phone, hobbies, others,
  } = data;

  const renderTitle = () => (
    <div className='member-card-title'>
      <img src={icon} className='member-card-icon' alt='Avatar img' />

      <div className='member-card-name-dob'>
        <span>{`${name} - ${dob}`}</span>
        {/* <div>
          <span>{name}</span>
        </div>
        <div>
          <span>{dob}</span>
        </div> */}
      </div>
    </div>
  );

  const renderContent = () => (
    <div className='member-card-content'>
      <div className='member-card-content-col'>
        <div className=''>
          <span>{`Role: ${role}`}</span>
        </div>

        <div className='mt4'>
          <span>{`Skills: ${skills}`}</span>
        </div>
      </div>

      <div className='member-card-content-col'>
        <div className=''>
          <span>{`Work experience: ${exp}`}</span>
        </div>

        <div className='mt4'>
          <span>{`Programming language: ${programming}`}</span>
        </div>
      </div>

      <div className='member-card-content-col'>
        <div className=''>
          <span>{`Email: ${email}`}</span>
        </div>

        <div className='mt4'>
          <span>{`Phone number: ${phone}`}</span>
        </div>
      </div>

      <div className='member-card-content-col'>
        <div className=''>
          <span>{`Hobbies: ${hobbies}`}</span>
        </div>

        <div className='mt4'>
          <span>{`Others: ${others}`}</span>
        </div>
      </div>

    </div>
  );

  return (
    <div className={classnames('member-card', className)}>
      <Card
        hoverable
        extra={undefined}
        title={renderTitle()}
      >
        {renderContent()}
      </Card>
    </div>
  );
};
MemberCard.defaultProps = {
  data: {},
  className: '',
  name: '',
};
MemberCard.propTypes = {
  data: PropTypes.shape(),
  className: PropTypes.string,
  name: PropTypes.string,
};

export default MemberCard;
