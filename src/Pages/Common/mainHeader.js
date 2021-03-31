import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

import { HOME_HEADER } from '../../Constants/home';
import { useMergeState } from '../../Helpers/customHooks';

const { SubMenu, Item, ItemGroup } = Menu;

const MainHeader = (props) => {
  const history = useHistory();
  const [state, setState] = useMergeState({
    current: false,
  });

  const handleClick = (e) => {
    console.log('click ', e);
    switch (e.key) {
      case HOME_HEADER[0]:
        history.push('/my-cv');
        break;
      case HOME_HEADER[1]:
        break;
      case HOME_HEADER[2]:
        history.push('/contact');
        break;
      case HOME_HEADER[3]:
        break;
      default:
        break;
    }
    setState({ current: e.key });
  };

  const { className } = props;
  const { current } = state;
  return (
    <div className='greeting-header'>

      <div className='greeting-header-left'>
        <span>Static Promotional Website</span>
      </div>

      <div className='greeting-header-right'>
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
            <a href='https://github.com/AceKnight97/staticpromotionalwebsite' target='_blank' rel='noopener noreferrer'>
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
  className: '',
};
MainHeader.propTypes = {
  className: PropTypes.string,
};

export default MainHeader;
