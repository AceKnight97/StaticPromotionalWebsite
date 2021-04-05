import React from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Menu, Button } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';

import { PAGE_MANAGER } from '../../Constants';
import { HOME_HEADER, BUSINESS_FIELDS } from '../../Constants/home';
import { useMergeState } from '../../Helpers/customHooks';

const { Item, SubMenu } = Menu; // , ItemGroup

const {
  HOME, CONTACT, OUR_TEAM, // MY_CV, HOME_PAGE,
} = PAGE_MANAGER;

const MainHeader = (props) => {
  const history = useHistory();
  const location = useLocation();
  // console.log({ location });
  const [state, setState] = useMergeState({
    current: false,
  });

  const onClickHome = () => {
    if (!location.pathname?.includes(HOME)) {
      history.push(HOME);
    }
  };

  const handleClick = (e) => {
    if (e.key !== state.current) {
      switch (e.key) {
        case HOME_HEADER[0]:
          history.push(OUR_TEAM);
          break;
        case HOME_HEADER[1]:
          break;
        case HOME_HEADER[2]:
          history.push(CONTACT);
          break;
        case HOME_HEADER[3]:
          break;
        default:
          break;
      }
      setState({ current: e.key });
    }
  };

  const { current } = state;

  return (
    <div className='home-header'>

      <Button type='text' className='home-header-left' onClick={onClickHome}>
        <span>Static Promotional Website</span>
      </Button>

      <div className='home-header-right'>
        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>

          <Item key={HOME_HEADER[0]}>
            {HOME_HEADER[0]}
          </Item>

          <SubMenu key={HOME_HEADER[1]} title={HOME_HEADER[1]}>
            <Item key={BUSINESS_FIELDS[0]}>
              {BUSINESS_FIELDS[0]}
            </Item>
            <Item key={BUSINESS_FIELDS[1]}>
              {BUSINESS_FIELDS[1]}
            </Item>
            <Item key={BUSINESS_FIELDS[2]}>
              {BUSINESS_FIELDS[2]}
            </Item>
            <Item key={BUSINESS_FIELDS[3]}>
              {BUSINESS_FIELDS[3]}
            </Item>
          </SubMenu>

          <Item key={HOME_HEADER[2]}>
            {HOME_HEADER[2]}
          </Item>

          <Item key={HOME_HEADER[3]}>
            {HOME_HEADER[3]}
          </Item>

        </Menu>
      </div>

    </div>
  );
};

MainHeader.defaultProps = {
};
MainHeader.propTypes = {
};

export default MainHeader;
