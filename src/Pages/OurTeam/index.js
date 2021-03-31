import React from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import _ from 'lodash';
import { MEMBER_INFO } from '../../Constants/ourTeam';
import MainHeader from '../Common/mainHeader';
import MemberCard from './Layout/memberCard';

const OurTeam = (props) => {
  // const { } = props;

  const renderMainView = () => (
    <div className='our-team-container'>
      {
        _.map(MEMBER_INFO, (x, i) => (
          <MemberCard data={x} key={i} />
        ))
      }
    </div>
  );

  return (
    <div className='our-team'>
      <MainHeader />

      <div className='our-team-main'>
        {renderMainView()}
      </div>
    </div>
  );
};
// OurTeam.defaultProps = {
// };
// OurTeam.propTypes = {
// };

export default OurTeam;
