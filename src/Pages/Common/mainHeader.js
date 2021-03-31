import React from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Menu, Button } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';

import { PAGE_MANAGER } from '../../Constants';
import { HOME_HEADER } from '../../Constants/home';
import { useMergeState } from '../../Helpers/customHooks';

const { Item } = Menu; // SubMenu, ItemGroup

const {
  HOME, MY_CV, CONTACT, HOME_PAGE,
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
          history.push(MY_CV);
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
          <Item key={HOME_HEADER[1]}>
            {HOME_HEADER[1]}
          </Item>
          <Item key={HOME_HEADER[2]}>
            {HOME_HEADER[2]}
          </Item>
          <Item key={HOME_HEADER[3]}>
            {HOME_HEADER[3]}
          </Item>
          <Item key={HOME_HEADER[4]}>
            <a href={HOME_PAGE} target='_blank' rel='noopener noreferrer'>
              {HOME_HEADER[4]}
            </a>
          </Item>
          {/* <SubMenu key={HOME_HEADER[2]} title='Navigation Three - Submenu'>
            <ItemGroup title='Item 1'>
              <Item key='setting:1'>Option 1</Item>
              <Item key='setting:2'>Option 2</Item>
            </ItemGroup>
            <ItemGroup title='Item 2'>
              <Item key='setting:3'>Option 3</Item>
              <Item key='setting:4'>Option 4</Item>
            </ItemGroup>
          </SubMenu> */}
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
